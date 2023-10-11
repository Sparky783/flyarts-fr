<?php

require_once ABSPATH. 'model/PHPMailer/src/Exception.php';
require_once ABSPATH. 'model/PHPMailer/src/PHPMailer.php';
require_once ABSPATH. 'model/PHPMailer/src/SMTP.php';

use ApiCore\Api;
use Common\ReCaptcha;
use Common\EmailTemplates;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$app->post('/contact', function($args) {
	// ReCaptcha
	$responseCaptcha = null;
	$reCaptcha = new ReCaptcha(RECAPTCHA_PRIVATE_KEY);

	if (ENV !== 'DEV' && $args['g-recaptcha-response']) {
		$responseCaptcha = $reCaptcha->verifyResponse(
			$_SERVER['REMOTE_ADDR'],
			$args['g-recaptcha-response']
		);
	}

	// Récupération des données
	$name = trim(strip_tags($args['name']));
	$email = trim(strip_tags($args['email']));
	$message = trim(strip_tags($args['message']));

	$test = true;
	if (!preg_match('/^[a-zéèàêâùïüëçA-Z -]{2,40}$/', $name)) {
		$test = false;
	}

	if (!preg_match('/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/', $email)) {
		 $test = false;
	}

	if ($message === '') {
		$test = false;
	}

	if ($test) {
		if ($responseCaptcha != null && $responseCaptcha->success) {
			$mail = new PHPMailer(true); // Passing `true` enables exceptions

			try {
				//Server settings
				$mail->isSMTP();
				$mail->Host = SMTP_HOST;
				$mail->SMTPAuth = SMTP_AUTH;
				$mail->Username = SMTP_USERNAME;
				$mail->Password = SMTP_PASSWORD;
				$mail->SMTPSecure = SMTP_SECURE;
				$mail->Port = SMTP_PORT;

				//Recipients
				$mail->setFrom(EMAIL_CONTACT, 'Contact | FlyArts - Photographie');
				$mail->addAddress(EMAIL_WABMASTER, 'FlyArts - Photographie');

				//Content
				$mail->isHTML(true); // Set email format to HTML

				$sujet = "Nouveau message";
				$html = "
					<p>
						<b>Vous avez reçu un message de ".$name." (".$email.").</b>
						<br /><br />
						<u>Message :</u>
						<br /><br />
						".$message."
					</p>
				";

				$mail->Subject = $sujet;
				$mail->Body    = EmailTemplates::StandardHTML($sujet, $html);
				$mail->AltBody = EmailTemplates::StandardText($sujet, $html);

				$mail->send();
				$reponse = [
					'error' => false,
					'errorMessage' => "",
					'message' => "Merci " . $name ." ! Votre message à bien été envoyé."
				];
			} catch (Exception $e) {
			    $reponse = [
					'error' => true,
					'errorMessage' => "Message could not be sent. Mailer Error: " . $mail->ErrorInfo,
					'message' => "Désolé, une erreur est survenue."
				];
			}
		} else {
			$reponse = [
				'error' => true,
				'message' => "Le controle anti-robot n'est pas dévérouillé."
			];
		}
	} else {
		$reponse = [
			'error' => true,
			'message' => "L'un des champs n'est pas correctement rempli."
		];
	}

	API::sendJSON($reponse);
});
?>