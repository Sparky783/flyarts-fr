<?php global $router; ?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include_once("HEAD.php"); ?>
		<title>FlyArts, mes projets, mes passions et mes loisirs en ligne | <?php echo TITLE; ?></title>
		<meta name="description" content="Site officiel de Florent LAVIGNOTTE.">
		
		<link rel="stylesheet" type="text/css" href="view/css/projects.css" />
	</head>
	<body>
		<?php include_once("HEADER.php"); ?>
		<section class="container">
			<div class="row">
				<section id="projects" class="col-sm-12 flyarts-section">
					<h1>Mes projets</h1>
					<div class="row">
						<?php echo $projectsHtml; ?>
					</div>
				</section>
				<section id="more_projects" class="col-sm-12 flyarts-section">
					<h1>Plus de projets</h1>
					<div class="row">
						<div class="col-md-12">
							<div class="card">
								<p class="card-body">
									<span>Retrouvez tous mes projets de développement directement sur mon GitHub.</span>
									<br /><br />
									<a href="https://github.com/sparky783" target="_blank">
										<i class="fab fa-github"></i>
									</a>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
		<?php include_once("FOOTER.php"); ?>
	</body>
</html>