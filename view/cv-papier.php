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
		<link rel="stylesheet" type="text/css" href="view/css/cv-papier.css?v=1" />

		<?php // Script principaux ?>
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		<script src="view/js/all.min.js"></script>
	</head>
	<body>
		<main>
			<h1>Ingénieur développement logiciel et web</h1>
			<div id="container">
				<div id="informations">
					<section id="infosText">
						<h2>Florent Lavignotte</h2>
						<small><?php echo $age; ?> ans</small>
						<p>
							<br /><br />
							<i class="fas fa-car"></i> Permis B avec véhicule
							<br /><br />
							<i class="fas fa-map-marker-alt"></i> 5 allée de la Houn<br />
							64420 ANDOINS
							<br /><br />
							<i class="fas fa-phone"></i> 06 70 56 27 10<br />
							<i class="fas fa-envelope"></i> florent.lavignotte@gmail.com
						</p>
					</section>

					<section id="competences">
						<div class="title">
							<h2>Compétences</h2>
						</div>
						<ul>
							<li>
								<p class="content">Développement web</p>
								<p class="techno">(Langages: PHP, HTML, CSS, Javascript)</p>
							</li>
							<li>
								<p class="content">Environnements techniques</p>
								<p class="techno">(NodeJS, Docker, Git Bash, TortoiseGit)</p>
							</li>
							<li>
								<p class="content">Programmation Logiciel</p>
								<p class="techno">(Langages: C#, C++, C, Java)</p>
								<!--<br />Développement de drivers Windows en User-Mode-->
							</li>
							<li>
								<p class="content">Framework</p>
								<p class="techno">(Angular, jQuery, Symfony, .NET)</p>
							</li>
							<li>
								<p class="content">Gestionnaire de base de données</p>
								<p class="techno">(MySQL, SQL Server, PostgreSQL, Oracle SQL)</p>
							</li>
							<li>
								<p class="content">Intégration continue / Déploiement continu</p>
								<p class="techno">(GitHub Action)</p>
							</li>
							<li>
								<p class="content">Gestion de projets</p>
								<p class="techno">(Scrum, Agile)</p>
							</li>
							<!--<li>
								<p class="content">Systèmes d'exploitation: Windows, Linux</p>
							</li>-->
							<li>
								<p class="content">Tests unitaires</p>
							</li>
							<!--<li>
								<p class="content">Notion de TDD</p>
							</li>
							<li>
								<p class="content">Réalité Virtuelle avec les casques Oculus sous Unreal Engine 4 et 5</p>
							</li>-->
							<li>
								<p class="content">Anglais technique</p>
								<p class="techno">TOEIC niveau B2</p>
							</li>
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
				</div>
				<div id="content">
					<section id="experiences">
						<div class="title">
							<h2>Expériences professionnelles</h2>
						</div>
						<ul>
							<li>
								<span class="date">Mars 2023 - Octobre 2023 (8 mois)</span><br />
								<span class="content">Développeur Web à NaturaBuy</span><br />
								<span class="activite">
									Chargé du développement de nouvelles fonctionnalités ainsi que la maintenance de leur site E-commerce.
								</span>
								<div class="competences">
									<label>Environement technique :</label>
									<ul>
										<li>PHP 8.2</li>
										<li>Javascript</li>
										<li>HTML</li>
										<li>CSS</li>
										<li>Docker</li>
										<li>Git</li>
									</ul>
								</div>
							</li>
							<li>
								<span class="date">Octobre 2018 - Février 2023 (4 ans et 5 mois)</span><br />
								<span class="content">Développeur logiciel à Safran Engineering Services</span><br />
								<span class="activite">
									Développeur et chef de projet en charge de l'évolution d'outils logiciel d'analyse et de maintenance des turbomoteurs du groupe Safran.
								</span>
								<div class="competences">
									<label>Environement technique :</label>
									<ul>
										<li>C# avec .Net Fremwork 4.8</li>
										<li>C/C++</li>
										<li>Symfony 3</li>
										<li>Gestion de projet</li>
										<li>Rédaction de documentations techniques</li>
										<li>Méthodologie Scrum</li>
										<li>Git</li>
									</ul>
								</div>
							</li>
							<li>
								<span class="date">Janvier 2018 - Juillet 2018 (6 mois)</span><br />
								<span class="content">Stagiaire développeur d'une application d'analyse de fluide à Total</span><br />
								<span class="activite">
									Conception et développement d'une application web pour l'équipe d'allocation de production.
								</span>
								<div class="competences">
									<label>Environement technique :</label>
									<ul>
										<li>Migration de AngularJS vers Angular 5</li>
										<li>PHP 5.6</li>
										<li>CSS avec Bootstrap</li>
										<li>Javascript avec jQuery</li>
										<li>C#</li>
										<li>Méthodologie Scrum</li>
									</ul>
								</div>
							</li>
							<li>
								<span class="date">Octobre 2016 - Fevrier 2017 (4 mois)</span><br />
								<span class="content">Stagiaire responsable du développement d'un site E-commerce pour Awesome-Bubbles</span><br />
								<span class="activite">
									Réalisation d'un site vitrine et d'un site E-commerce avec WordPress.
								</span>
								<div class="competences">
									<label>Environement technique :</label>
									<ul>
										<li>WordPress</li>
										<li>Plugin WooCommerce</li>
										<li>Création de thèmes</li>
										<li>Création de plugins</li>
										<li>PHP 5.6</li>
										<li>CSS avec Bootstrap</li>
										<li>Javascript avec jQuery</li>
									</ul>
								</div>
							</li>
							<li>
								<span class="date">Février 2016 - Mai 2016 (3 mois)</span><br />
								<span class="content">Stagiaire chez Exakis, chargé de la mise en place d'un environnement Microsoft SharePoint 2016</span><br />
								<span class="activite">
									Découverte et mise en place d'un serveur SharePoint OnPremise pour présentation des nouvelles fonctionnalités de la version 2016 de l'outil. 
								</span>
								<div class="competences">
									<label>Environement technique :</label>
									<ul>
										<li>SharePoint 2016</li>
										<li>Rédaction de documentations techniques</li>
									</ul>
								</div>
							</li>
							<li>
								<span class="date">Janvier 2014 - Janvier 2015 (1 an)</span><br />
								<span class="content">Assistant et gestionnaire d'application de reporting de production à Total</span><br />
								<span class="activite">Responsable de l'analyse et la présentation des données de production 100% opérés par l'entreprise.</span>
								
								<div class="competences">
									<label>Environement technique :</label>
									<ul>
										<li>Tableur Excel</li>
										<li>Génération de rapport</li>
										<li>Analyse de données pétrolières</li>
									</ul>
								</div>
							</li>
							<!--<li>
								<span class="date">Janvier 2012 - Juillet 2013 (1 an et 7 mois)</span><br />
								<span class="content">Cartographe à ERDF</span><br />
								<span class="activite">Chargé de la mise à jour des plans cartographique des Landes, des Pyrénées-Atlantiques et des Hautes-Pyrénées.</span>
								<ul class="competences">
									<li>Utilisation des logiciel de cartographie Atlas et Pacific</li>
									<li>Gestion des équipe de cartographie sur le terrain</li>
									<li>Mise à jour des bases de données cartographique du sud-ouest</li>
								</ul>
							</li>
							<li>
								<span class="date">Mai 2011 - Juin 2011 (2 mois)</span><br />
								<span class="content">Stagiaire à Aquitaine Electronique</span><br />
								<span class="activite">Chargé de la mise en place de procédures de test.</span>
								<ul class="competences">
									<li>Rédaction de documentations de test</li>
									<li>Analyse et test de schéma électique</li>
								</ul>
							</li>-->
						</ul>
					</section>

					<section id="formations">
						<div class="title">
							<h2>Formations et Diplômes</h2>
						</div>
						<ul>
							<li>
								<span class="date">Octobre 2022 :</span>
								<span class="content">Cybersécurité Software et Hardware</span>
							</li>
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
				</div>
			</div>
		</main>
	</div>
</html>