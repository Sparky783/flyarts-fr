<?php global $router; ?>

<!DOCTYPE html>
<html>
	<head>
		<title><?php echo TITLE; ?></title>
		<meta name="robots" content="index, follow" />
		<meta charset="utf-8" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="Content-Language" content="fr" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="distribution" content="global" />
		<meta name="reply-to" content="florent.lavignotte@gmail.com" />
		<meta name="copyright" content="Florent Lavignotte" />
		<meta name="author" content="" />
		<meta name="revisit-after" content="7 days" />
		<link rel="icon" type="image/x-icon" href="view/img/favicon.ico" />
		<!--[if IE]><link rel="shortcut icon" type="image/x-icon" href="view/img/favicon.ico" /><![endif]-->

		<?php // CSS Standard ?>
		<link rel="stylesheet" type="text/css" href="view/css/all.min.css" />
		<link rel="stylesheet" type="text/css" href="view/css/cv-papier.css" />

		<?php // Script principaux ?>
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		<script src="view/js/all.min.js"></script>
	</head>
	<body>
		<main>
			<div id="container">
				<div id="block"></div>
				<section id="experiences">
					<div class="title">
						<h2>Expériences professionnelles</h2>
					</div>
					<ul>
						<li>
							<span class="date">Depuis Mars 2023</span><br />
							<span class="content">Développeur Web à NaturaBuy</span><br />
							<span class="description">
								Chargé du développement de nouvelles fonctionnalités ainsi que la maintenance de leur site E-commerce développé en PHP et JavaScript.
							</span>
						</li>
						<li>
							<span class="date">Octobre 2018 - Février 2023</span><br />
							<span class="content">Développeur logiciel à Safran Engineering Services</span><br />
							<span class="description">
								Développeur et chef de projet, je suis en charge du développement d'outils logiciel ayant pour principal objectif l'analyse et la maintenance des turbomoteurs du groupe Safran. Principalement écrit en C# et C++, ces programmes sont conçu autour d'un développement Agile (Scrum) et font de l'objet de tests unitaires avant leur livraison auprèt du client.<br />
								D'autres projets auquel je suis membre font également partie de mes activités. La réalité virtuel d'une part ainsi que le développement d'outils de gestion de projet (en Symfony et en Ruby) d'autre part.
							</span>
						</li>
						<li>
							<span class="date">Janvier 2018 - Juillet 2018</span><br />
							<span class="content">Stagiaire développeur d'une application d'analyse de fluide à Total</span><br />
							<span class="description">
								Dans l'équipe d'allocation de production, j'ai participé à la conception et au développement d'une application web avec Angular 5 d'analyse des fluides permettant de fournir des résultats partout dans le monde.
								Proche de l'utilisateur j'ai pu analyser le besoin et affiner l'expérience client au fur et à mesur de mon stage.
							</span>
						</li>
						<li>
							<span class="date">Octobre 2016 - Fevrier 2017</span><br />
							<span class="content">Stagiaire responsable du développement d'un site E-commerce pour Awesome-Bubbles</span><br />
							<span class="description">
								En vue d'élargir la clientelle de ce jeune revandeur de champagne en Irlande, j'ai réalisé d'un site vitrine de A à Z a l'aide de l'outil WordPress à l'aide du plugin Woo Commerce.
								Du design aux effets jQuery, la conception de ce site internet fut pour moi un exelent moyen de découvrir WordPress et tous ses aspects.
							</span>
						</li>
						<li>
							<span class="date">Février 2016 - Mai 2016</span><br />
							<span class="content">Stagiaire chez Exakis, chargé de la mise en place d'un environnement Microsoft SharePoint 2016</span><br />
							<span class="description">
								Découverte et mise en place d'un serveur SharePoint OnPremise pour présentation des nouvelles fonctionnalités de la version 2016 de l'outil. 
							</span>
						</li>
						<li>
							<span class="date">Janvier 2014 - Janvier 2015</span><br />
							<span class="content">Assistant et gestionnaire d'application de reporting de production à Total</span><br />
							<span class="description">Responsable de l'analyse et la présentation des données de production 100% opérés par l'entreprise.</span>
						</li>
						<!--<li>
							<span class="date">Janvier 2012 - Juillet 2013</span><br />
							<span class="content">Cartographe à ERDF</span><br />
							<span class="description">Chargé de la mise à jour des plans cartographique des Landes, des Pyrénées-Atlantiques et des Hautes-Pyrénées.</span>
						</li>
						<li>
							<span class="date">Mai 2011 - Juin 2011</span><br />
							<span class="content">Stagiaire à Aquitaine Electronique</span><br />
							<span class="description">Chargé de la mise en place de procédures de test.</span>
						</li>-->
					</ul>
				</section>
				<section id="formations">
					<div class="title">
						<h2>Formations et Diplômes</h2>
					</div>
					<ul>
						<li>
							<span class="date">Septembre 2015 - Juillet 2018 :</span>
							<span class="content">Ecole d'ingénieur Informatique à l'Exia.Cesi</span>
						</li>
						<li>
							<span class="date">Décembre 2014 :</span>
							<span class="content">Photoshop CS6 - Avancé</span>
						</li>
						<li>
							<span class="date">Novembre 2014 :</span>
							<span class="content">Gestion et modélisation des bases de données</span>
						</li>
						<li>
							<span class="date">Novembre 2014 :</span>
							<span class="content">Ergonomie et design des sites web</span>
						</li>
						<li>
							<span class="date">Septembre 2014 :</span>
							<span class="content">Base de données Oracle SQL</span>
						</li>
						<li>
							<span class="date">Juin 2014 :</span>
							<span class="content">Microsoft Sharepoint 2010</span>
						</li>
						<!--<li>
							<span class="date">Septembre 2009 - Juin 2011 :</span>
							<span class="content">DUT GEII (Génie Electronique et Informatique Industriel)</span>
						</li>
						<li>
							<span class="date">Juin 2009 :</span>
							<span class="content">Bac STI Electrotechnique (Science et Technique de l'Ingénieur)</span>
						</li>-->
					</ul>
				</section>
				<section id="competences">
					<div class="title">
						<h2>Compétences</h2>
					</div>
					<ul>
						<li>
							<span class="content">Programmation Logiciel <span class="date">(Langages: C#, C++, C, Java)</span>, Framework <span class="date">(.NET Framework, .NET Core, Boost)</span>
								<!--<br />Développement de drivers Windows en User-Mode-->
							</span>
						</li>
						<li>
							<span class="content">Développement Web <span class="date">(Langages: PHP, Html, CSS, JS)</span> Angular, jQuery, Synfony, NodeJS</span>
						</li>
						<li>
							<span class="content">Gestionnaire de base de données <span class="date">(Oracle SQL, MySQL, SQL Server)</span></span>
						</li>
						<li>
							<span class="content">Réalité Virtuelle avec les casques Oculus sous Unreal Engine 4</span>
						</li>
						<li>
						<span class="content">Outils de gestion <span class="date">(Git, TortoiseGit)</span></span>
						</li>
						<li>
							<span class="content">Gestion de projets <span class="date">(Méthodes: Scrum, Agile)</span></span>
						</li>
						<!--<li>
							<span class="content">Systèmes d'exploitation: Microsoft Windows, Linux</span>
						</li>-->
						<li>
							<span class="content">Tests unitaires</span>
						</li>
						<!--<li>
							<span class="content">Notion de TDD</span>
						</li>-->
					</ul>
				</section>
				<section id="loisirs">
					<div class="title">
						<h2>Loisirs</h2>
					</div>
					<div class="element-list">
						<p class="element">
							<i class="fas fa-dumbbell"></i><br />
							<span>Sport</span>
						</p>
						<p class="element">
							<i class="fas fa-music"></i><br />
							<span>Piano</span>
						</p>
						<p class="element">
							<i class="fas fa-camera"></i><br />
							<span>Photographie</span>
						</p>
					</div>
				</section>
				<section id="infos">
					<img src="view/img/cv-infos.png" />
				</section>
				<section id="infosText">
					<p><?php echo $age; ?> ans</p>
					<div>
						<p>Permis B avec véhicule</p>
						<p>
							5 allée de la Houn<br />
							64420 ANDOINS
						</p>
						<p>06 70 56 27 10</p>
						<p>florent.lavignotte@gmail.com</p>
					</div>
				</section>
				<h1>Ingénieur développement logiciel</h1>
			</div>
		</main>
	</div>
</html>