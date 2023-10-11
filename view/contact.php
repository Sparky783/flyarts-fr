<?php global $router; ?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include_once("HEAD.php"); ?>
		<title>Contactez-moi pour toutes vos questions | <?php echo TITLE; ?></title>
		<meta name="description" content="Ecrivez moi si vous souhaitez prendre contact avec moi ou si vous souhaitez des informations sur mes projets.">
		
		<link rel="stylesheet" type="text/css" href="view/css/contact.css" />
		
		<script src="https://www.google.com/recaptcha/api.js" async defer></script>
		<script type="text/javascript" src="view/js/form.js"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$("#contactSend").hide();
				$("#contactResponse").hide();

				$("#contactForm form").SpForm(
					function() {
						$("#contactForm").hide();
						$("#contactSend").show();
					},
					function(data) {
						if (data.error) {
							console.log(data.errorMessage);
						}

						$("#contactResponse").html('<p class="text-center"><i class="fa fa-grin-alt"></i> ' + data.message + '</p>');
						$("#contactSend").hide();
						$("#contactResponse").show();
					}
				);
			});

			function sendFormCallback() {
				$("#contactForm form").submit();
			}
		</script>
	</head>
	<body>
		<?php include_once("HEADER.php"); ?>
		
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-xs-12 offset-sm-3">
					<section id="informations">
						<h1>Me contacter</h1>
						<p class="text-center">
							<b>Florent LAVIGNOTTE</b>
							<br /><br />
							<a class="btn btn-danger" href="mailto:florent.lavignotte@gmail.com">florent.lavignotte@gmail.com</a>
						</p>
					</section>
					<section id="formulaire">
						<h3><i class="fas fa-pen"></i> Envoyer un message</h3>
						<div class="card card-danger">
							<div class="card-body">
								<div id="contactForm">
									<form class="ap-form" action=<?php $router->API("contact"); ?> method="post">
										<div class="form-group mb-2">
											<label for="inputName"><span class="ap-form-star">*</span>Nom et prénom :</label>
											<input id="inputName" class="form-control" type="name" name="name" aria-describedby="nameHelp" placeholder="Entrez votre nom et votre prénom">
										</div>
										<div class="form-group mb-2">
											<label for="inputEmail"><span class="ap-form-star">*</span>E-mail :</label>
											<input id="inputEmail" class="form-control" type="email" name="email" aria-describedby="emailHelp" placeholder="Entrez votre adresse E-mail">
										</div>
										<div class="form-group mb-2">
											<label for="inputMessage"><span class="ap-form-star">*</span>Message :</label>
											<textarea id="inputMessage" class="form-control" type="message" name="message" rows="5"></textarea>
										</div>
										<small class="form-text text-muted"><span class="ap-form-star">*</span> Ces champs sont obligatoires.</small>
										<p class="text-right">
											<button class="btn btn-danger g-recaptcha" type="submit" data-sitekey="<?= RECAPTCHA_PUBLIC_KEY ?>" data-callback="sendFormCallback">Envoyer</button>
										</p>
									</form>
								</div>

								<div id="contactSend" class="ap-form-send">
									<p class="text-center">
										Envoi en cours ...<br />
										Veuillez patienter
									</p>
									<div class="spinner-border" role="status"></div>
								</div>

								<div id="contactResponse" class="ap-form-response"></div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
		
		<?php include_once("FOOTER.php"); ?>
	</body>
</html>