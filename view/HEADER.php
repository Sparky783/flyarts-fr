<?php global $router; ?>

<header>
	<nav class="navbar navbar-expand-lg navbar-dark">
  		<div class="container-fluid">
			<a class="navbar-brand" href=<?= URL ?>>FlyArts</a>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div id="mainMenu" class="collapse navbar-collapse">
				<div class="me-auto mb-2 mb-lg-0"></div>
				<ul class="navbar-nav d-flex">
					<li class="nav-item <?php if($router->getCurrentPage() === "home" || $router->getCurrentPage() === "") echo "active"; ?>">
						<a class="nav-link" href=<?php $router->url("home"); ?> title="Accueil du site FlyArts">Accueil</a>
					</li>
					<li class="nav-item <?php if($router->getCurrentPage() === "cv") echo "active"; ?>">
						<a class="nav-link" href=<?php $router->url("cv"); ?> title="Mon CV en ligne">CV</a>
					</li>
					<li class="nav-item <?php if($router->getCurrentPage() === "projects") echo "active"; ?>">
						<a class="nav-link" href=<?php $router->url("projects"); ?> title="Mes projets">Projets</a>
					</li>
					<li class="nav-item <?php if($router->getCurrentPage() === "contact") echo "active"; ?>">
						<a class="nav-link" href=<?php $router->url("contact"); ?> title="Contactez-moi si vous avez des questions">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>