<?php global $router; ?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include_once("HEAD.php"); ?>
		<title>FlyArts, mes projets, mes passions et mes loisirs en ligne | <?php echo TITLE; ?></title>
		<meta name="description" content="Site officiel de Florent LAVIGNOTTE.">
		
		<link rel="stylesheet" type="text/css" href="view/css/project-retropie.css" />
		<link rel="stylesheet" type="text/css" href="view/css/jquery.fancybox.min.css" />
		
		<script type="text/javascript" src="view/js/jquery.fancybox.min.js"></script>
	</head>
	<body>
		<?php include_once("HEADER.php"); ?>
		<section class="container">
			<div class="row">
				<section class="col-sm-12">
					<h1>Playstation RetroPie</h1>
				</section>
				<section id="portrait" class="col-sm-12 fa-section">
					<h2>Objectif</h2>
					<p>
						Le principal objectif de ce projet est de mettre en place un système d'émulateur de console sur une Rasberry Pi 3 et d'intégrer ce système dans un boitier
						rappelant les consoles de l'époque. Ce projet est l'un des premiers que j'ai réalisé.
					</p>
					<p class="image text-center">
						<img src="content/projects/retropie/project-retropie-1.jpg" alt="Photo du projet PlayStation RetroPie terminé." />
					</p>
				</section>
				<section id="retropie" class="col-md-12 fa-section">
					<h2>1. RetroPie</h2>
					<p>
						RetroPie est un système d'émulation de console rétro disponible sur internet. Il n'est pas le seul système à fournir ce genre de service.
						Nous pouvons cité Recall Box qui est un concurrent direct du système RetroPie. Libre et accessible à tout le monde, cette OS permet de simmuler
						plus d'une vingtaine de console depuis les premières générations jusqu'aux consoles plus récentes tel que la PlayStation 2.
						Embarqué principalement sur une Raspberry Pi, il est possible de modifier le système pour le personnaliser à souhait.
					</p>
					<p class="link text-center">
						<a class="btn btn-danger btn-lg" href="https://retropie.org.uk/" title="Site officiel du système RetroPie" target="_blank"><i class="fas fa-external-link-alt"></i> RetroPie</a>
					</p>
					<p>
						Dans le cadre de mon projet, je l'ai installé sur un Raspberry Pi 3, qui été à ce moment là le modèle le plus récent.				
						<br /><br />
						L'installation est très simple, elle consiste a déployer un OS sur la carte SD du Raspberry Pi.
						Pour celà, il suffit de télécharger l'image présente sur le site RetroPie et de la mettre sur la carte SD.
						Ensuite il faut lancer le système et suivre les instructions d'installation. Le système de base est déjà très complet et ne nécessite que quelques modifications pour répondre à tous mes besoins.
						<br /><br />
						Au cours de mes essais, j'ai été confronté à un problème fréquent sur les Raspberry. Ce problème corrompait les données présentes sur la carte SD lors d'une coupure de courant et également lors de l'extinction de la console.
						Pour le résoudre, j'ai donc acheté une nouvelle carte SD de la marque Samsung.
						Cette nouvelle carte encaisse mieux les coupures et ne pose pas ce genre de problème.
					</p>
				</section>
				<section class="col-md-12">
					<h2>2. Impression 3D</h2>
					<p>
						Maintenant, le système étant en place, il me fallait un boitier pour l'accueillir. Un boitier s'inspirant des consoles rétros semblait être une bonne idée.
						Léger, compact et facile a démonter, j'ai choisi de prendre la carcasse d'une vieille PlayStation 1 première génération. Sur internet j'ai pu en trouver une pour moins de 10€.
						La première étape fut de démonter la console et de retirer l'ensemble des éléments la composant. Ensuite, j'en ai profité pour nettoyer chaques pièces et vérifier que rien ne soit cassé.
						J'ai ensuite bloqué le bouton permettant l'ouverture de la console en ajoutant un anneau de fer.
					</p>
					<p class="image">
						<img class="img-fluid" src="content/projects/retropie/project-retropie-3.jpg" alt="Photo du bouton d'ouverture de la PlayStation." />
					</p>
					<p>
						Je souhaitais conserver au maximum le design de la console d'origine, j'ai donc décidé d'imprimer en 3D les pièces permettant de tenir la carte Raspberry
						ainsi que l'ensemble des connectiques pour utiliser la console. En façade, je place les ports USB pour les manettes et au dos, les ports pour connecter la console à la télé.
						J'ai également choisit de mettre un port USB au dos de la console pour pouvoir mettre à jour ma liste de jeux rétro.
						Ceci me permet d'augmenter ma capacité de jeux et de les mettre à jour sans devoir ouvrir le boitier.
					</p>
				</section>
				<section class="col-md-6">
					<p>
						<img class="img-fluid" src="content/projects/retropie/project-retropie-2.jpg" alt="Photo du bouton des connectiques en façade et au dos." />
					</p>
				</section>
				<section class="col-md-6 fa-section">
					<div class="card">
						<div class="card-header">
							<h4>Eléments 3D</h4>
						</div>
						<table class="table">
							<tbody>
								<tr>
									<td>Support Raspberry Pi 3</td>
									<td class="text-right">
										<a class="btn btn-info btn-sm" href="content/projects/retropie/Raspberry.stl" target="_blank">.stl</a>
										<a class="btn btn-info btn-sm" href="content/projects/retropie/Raspberry.FCStd">.FCStd</a>
									</td>
								</tr>
								<tr>
									<td>Connectique manettes</td>
									<td class="text-right">
										<a class="btn btn-info btn-sm" href="content/projects/retropie/Manettes.stl" target="_blank">.stl</a>
										<a class="btn btn-info btn-sm" href="content/projects/retropie/Manettes.FCStd">.FCStd</a>
									</td>
								</tr>
								<tr>
									<td>Fixation connectique manettes</td>
									<td class="text-right">
										<a class="btn btn-info btn-sm" href="content/projects/retropie/ManettesLoker.stl" target="_blank">.stl</a>
										<a class="btn btn-info btn-sm" href="content/projects/retropie/ManettesLoker.FCStd">.FCStd</a>
									</td>
								</tr>
								<tr>
									<td>Connectique auxiliaires</td>
									<td class="text-right">
										<a class="btn btn-info btn-sm" href="content/projects/retropie/Auxiliaires.stl" target="_blank">.stl</a>
										<a class="btn btn-info btn-sm" href="content/projects/retropie/Auxiliaires.FCStd">.FCStd</a>
									</td>
								</tr>
								<tr>
									<td>Connectique USB auxiliaires</td>
									<td class="text-right">
										<a class="btn btn-info btn-sm" href="content/projects/retropie/USBAux.stl" target="_blank">.stl</a>
										<a class="btn btn-info btn-sm" href="content/projects/retropie/USBAux.FCStd">.FCStd</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
				<section class="col-md-12 fa-section">
					<h2>3. Montage</h2>
					<p>
						Tout d'abord, j'ai commencé par monter le support du Raspberry ainsi que le Raspberry Pi.
						J'ai ensuite glissé les connectiques dans les supports imprimés en 3D puis je les ai collées au pistolet à colle pour les maintenir.
						Une fois les câbles placés, j'ai récupéré une partie de la carte d'alimentation d'origine pour conserver les boutons d'origines ainsi que leur positions.
						J'ai utilisé une petite alimentation externe de 5V que j'ai intégré dans la console afin de la rendre plus esthétique.
					</p>
					<p class="image">
						<img class="img-fluid" src="view/img/project-retropie-4.jpg" alt="Photo du bouton des connectiques en façade et au dos." />
					</p>
				</section>

				<section class="col-md-12 fa-section">
					<h2>4. Bonus</h2>
					<p>
						J'ai voulu concerver le bouton "Reset" afin de pouvoir ajouter une fonctionnalité supplémentaire au système.
						Ce bouton me permet de quitter un jeu directement sans avoir besoin d'appuyer sur Start et Select en même temps.
					</p>
				</section>
			</div>
		</section>
		<?php include_once("FOOTER.php"); ?>
	</body>
</html>