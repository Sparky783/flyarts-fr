<?php global $router; ?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include_once("HEAD.php"); ?>
		<title>FlyArts, mes projets, mes passions et mes loisirs en ligne | <?php echo TITLE; ?></title>
		<meta name="description" content="Site officiel de Florent LAVIGNOTTE.">
		
		<link rel="stylesheet" type="text/css" href="view/css/home.css" />
	</head>
	<body>
		<?php include_once("HEADER.php"); ?>
		<section class="container">
			<div class="row">
				<section class="col-sm-12">
					<div class="jumbotron">
						<h1 class="display-4">FlyArts</h1>
						<p class="lead">Mon petit site perso pour y mettre mes projets, mes passions et un peu de moi en ligne.</p>
					</div>
				</section>
				<section id="portrait" class="col-sm-12 fa-section">
					<img class="rounded float-left img-thumbnail" src="view/img/portrait-1.jpg" alt="...">
					<h2>Qui suis-je ?</h2>
					<p>
						Je m'appelle Florent Lavignotte et je suis passionné d'informatique depuis le plus jeune age. Tombé dedans avec le premier OS Ms DOS
						et désireux de créer tous les projets que j'ai en tête, je me suis lancé dans un cursus en Electronique pour ensuite aller dans
						une école d'ingénieur en informatique spécialisée dans le développement. Aujourd'hui, je réalise enfin mes ambitions et crée des outils
						en tout genre.
					</p>
					<p class="text-right">
						<a class="btn btn-danger btn-lg" href=<?php $router->Url("cv"); ?> role="button">Accéder à mon CV</a>
					</p>
				</section>
				<div class="col-md-12 shadow">
					<div class="row">
						<section class="col-md-6 fa-section">
							<h2>Qu'est ce que FlyArts ?</h2>
							<p>
								FlyArts est un site internet que j'ai créé afin de présenter et mettre en avant mes compétences dans le domaine du développement
								logiciel et web. Ce site a pour but de présenter mes compétences et mes expériences en matière de programmation ainsi que
								ma personnalité à travers mes passions et loisirs.
								J'espère pouvoir apporter aux personnes interessées toutes les connaissances que j'ai acquise grâce à mes réalisations.
							</p>
						</section>
						<section class="col-md-6 fa-section">
							<h2>Pourquoi FlyArts ?</h2>
							<p>
								FlyArts était le nom que j'avais choisi pour mon projet de photographie.
								Avec le temps ce nom est devenu de plus en plus présent dans mes projets.
								Cela à fini par devenir un peu ma marque de fabrique auprès de mes amis et mes proches.
								J'ai ainsi donné ce nom au site pour lui donner une personalité propre.
								L'utilisation de mon nom et mon prénom aurait été trop commun pour un site personnel.
							</p>
						</section>
					</div>
				</div>
				<section id="projects" class="col-sm-12 fa-section">
					<h2>Mes projets en cours</h2>
					<div class="row">
						<?php echo $currentProjectsHtml; ?>
						<div class="col-md-4">
							<p id="projectsMore">
								<a class="btn btn-danger" href=<?php $router->Url("projects"); ?> title="">
									<i class="fas fa-arrow-right"></i>
								</a>
							</p>
						</div>
					</div>
				</section>
			</div>
		</section>
		<?php include_once("FOOTER.php"); ?>
	</body>
</html>