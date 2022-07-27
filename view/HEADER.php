<?php global $router; ?>

<header>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<a class="navbar-brand" href=<?php echo URL; ?>>FlyArts</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div id="mainMenu" class="collapse navbar-collapse navbar-right">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item <?php if($router->GetCurrentPage() == "home" || $router->GetCurrentPage() == "") echo "active"; ?>">
					<a class="nav-link" href=<?php $router->Url("home"); ?> title="Accueil du site FlyArts">Accueil</a>
				</li>
				<li class="nav-item <?php if($router->GetCurrentPage() == "cv") echo "active"; ?>">
					<a class="nav-link" href=<?php $router->Url("cv"); ?> title="Mon CV en ligne">CV</a>
				</li>
				<li class="nav-item <?php if($router->GetCurrentPage() == "projects") echo "active"; ?>">
					<a class="nav-link" href=<?php $router->Url("projects"); ?> title="Mes projets">Projets</a>
				</li>
				<li class="nav-item <?php if($router->GetCurrentPage() == "contact") echo "active"; ?>">
					<a class="nav-link" href=<?php $router->Url("contact"); ?> title="Contactez-moi si vous avez des questions">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
</header>