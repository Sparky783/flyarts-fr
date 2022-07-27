<?php global $router; ?>

<!DOCTYPE html>
<html>
	<head>
		<?php include_once("view/HEAD.php"); ?>
		<title>Page d'erreur | <?php echo TITLE; ?></title>
		<meta name="description" content="Page d'erreur du site.">
		<meta name="robots" content="noindex, follow" />
		<link rel="stylesheet" type="text/css" href="view/css/home.css" />
	</head>
	<body>
		<div class="container">
			<div class="row">
				<p class="text-center">
					Erreur 404 ! Cette page n'existe pas.
					<br /><br />
					Veuillez retourner sur le site en cliquant ici :<br />
					<a class="btn btn-hc" href=<?php $router->URL("home"); ?> title="Site officiel">Retour sur le site</a>
				</p>
			</div>
		</div>
	</body>
</html>