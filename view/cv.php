<?php global $router; ?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include_once("HEAD.php"); ?>
		<title>FlyArts, mes projets, mes passions et mes loisirs en ligne | <?php echo TITLE; ?></title>
		<meta name="description" content="Site officiel de Florent LAVIGNOTTE.">
		
		<link rel="stylesheet" type="text/css" href="view/css/cv.css" />
		
		<script type="text/javascript" src="view/js/cv.js"></script>
	</head>
	<body>
		<?php include_once("HEADER.php"); ?>
		<section class="container">
			<div class="row">
				<section class="col-sm-12">
					<h1>Ingénieur informatique</h1>
				</section>
				<div class="col-md-3">
					<section id="infos" class="card">
						<div class="card-body">
							<h3>Florent Lavignotte</h3>
							<p>
								<?php echo $age; ?> ans<br />
								Permis B avec véhicule
								<br /><br />
								8 Chemin du haut<br />
								64450 ARGELOS
								<br /><br />
								06 70 56 27 10<br />
								<a href=<?php $router->Url("contact"); ?> title="Contactez-moi si vous avez des questions">florent.lavignotte@gmail.com</a>
							</p>
							<!--<hr />
							<h6>Informations complémentaires</h6>
							<p>
								Trésorier d'un club sportif pendant 5 ans.
							</p>-->
						</div>
					</section>
					<section id="cvVersion">
						<a class="btn btn-danger btn-lg" href=<?php $router->Url("cv-papier"); ?> title="Version imprimable et synthétique" target="_blank">Version imprimable</a>
					</section>
				</div>
				<div class="col-md-9">
					<section id="experiences">
						<div class="title">
							<h2>Expériences professionnelles</h2>
						</div>
						<ul>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Depuis Octobre 2018</span><br />
									<span class="content">Développeur logiciel à Safran Engineering Services</span><br />
									<span class="description">Travaillant sur des projets principalement orienté C# et C++, je suis chargé du développement d'outils de communication et de maintenance de calculateurs de régulation.</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Développeur et chef de projet, je suis en charge du développement d'outils logiciel ayant pour principal objectif l'analyse et la maintenance des turbomoteurs du groupe Safran. Principalement écrit en C# et C++, ces programmes sont conçu autour d'un développement Agile (Scrum) et font de l'objet de tests unitaires avant leur livraison auprèt du client.<br />
											D'autres projets auquel je suis membre font également partie de mes activités. La réalité virtuel d'une part ainsi que le développement d'outils de gestion de projet (en Symfony et en Ruby) d'autre part.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Janvier 2018 - Juillet 2018</span><br />
									<span class="content">Stagiaire développeur d'une application d'analyse de fluide à Total</span><br />
									<span class="description">Dans l'équipe d'allocation de production, j'ai participé à la conception et au développement d'une application web d'analyse des fluides.</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											L'objectif de ce stage de 6 mois fut de réaliser une aplication web permettant d'analyser les hydrocarbures prélevés en laboratoire. Cet outil doit être intuitif et facile d'utilisation. J'ai créé une interface utilisateur à l'aide du framework Angular 5. Afin de traiter la masse de données et de retourner des résultats précis, une API réalisée en C# a été mise en place.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Octobre 2016 - Fevrier 2017</span><br />
									<span class="content">Stagiaire responsable du développement d'un site E-commerce pour Awesome-Bubbles</span><br />
									<span class="description">En vue d'élargir la clientèle de ce revendeur de champagne en Irlande, j'ai réalisé un site vitrine WordPress à l'aide d'un plugin Woo Commerce.</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Désireux d'être plus présent sur le net, cette petite entreprise de vente de champagne en Irlande a fait appel à un stagiaire pour mettre à jour leur site internet. C'est pourquoi, j'ai rejoint cette équipe et mis en place un site vitrine pour la présentation de ce commerçant ainsi qu'un site E-commerce afin d'étendre ses ventes sur internet.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Février 2016 - Mai 2016</span><br />
									<span class="content">Stagiaire chez Exakis, chargé de la mise en place d'un environnement Microsoft SharePoint 2016</span><br />
									<span class="description">Découverte et mise en place d'un serveur SharePoint OnPremise pour la présentation des nouvelles fonctionnalités de la version 2016 de l'outil.</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Durant 3 mois de stage chez Exakis à Bidart, j'étais chargé de mettre en place un environnement Microsoft SharePoint 2016 OnPremise. La nouvelle version de cet outil colaboratif a pour principal objectif d'être complètement lié au cloud, ceci permettant une plus grande disponibilité des services et garantissant de meilleures performances. Tout au long de cette mission, j'ai rédigé plusieurs documents permettant d'expliquer son fonctionnement aux collaborateurs ainsi que la procédure de mise en place de l'outil directement chez le client. Pour finir, j'ai mis en place l'outil sur un serveur dédié par l'entreprise afin de pouvoir présenter Microsoft Sarepoint 2016 aux clients.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Janvier 2014 - Janvier 2015</span><br />
									<span class="content">Assistant et gestionnaire d'application de reporting de production à Total</span><br />
									<span class="description">Responsable de l'analyse et la présentation des données de production 100% opérés par l'entreprise.</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Au service Reporting de production mon objectif était de collecter les données hebdomadaires et mensuelles de production des sites du groupe Total. Directement en relation avec les filliales, j'avais également pour responsabilité de faire remonter les incidents survenus lors de la production afin de manager la production et d'augmenter les performances. Le dernier point de cette mission fut la rédaction de rapports de production en vu d'informer la direction.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Janvier 2012 - Juillet 2013</span><br />
									<span class="content">Cartographe à ERDF</span><br />
									<span class="description">Chargé de la mise à jour des plans cartographiques des Landes, des Pyrénées-Atlantiques et des Hautes-Pyrénées.</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Dans cette grande entreprise française, j'étais en charge de la mise à jour des réseaux électrique des départements Pyrénées-Atlantiques, Hautes-Pyrénées ainsi que des Landes. Travaillant avec les logiciels de cartographie Atlas et Pacific, mon objectif était de détecter les anomalies présentes dans la base de données de l'entreprise et de les corriger. Cette activité pleinement en autonomie, me permettait d'être en relation avec les techniciens présent sur le terrain ainsi qu'avec les Géométre-Topographes partenaires d'ERDF.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Mai 2011 - Juin 2011</span><br />
									<span class="content">Stagiaire à Aquitaine Electronique</span><br />
									<span class="description">Chargé de la mise en place de procédures de test.</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Stagiaire de fin d'étude pour mon DUT, j'ai durant 2 mois à Aquitaine Electronique rédigé plusieurs procédures de contrôle pour des baies électrique utilisé dans les équipements militaire produit par l'entreprise. J'ai également réalisé le contrôle de celle-ci afin de valider ces procédures.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<section id="formations">
						<div class="title">
							<h2>Formations et Diplômes</h2>
						</div>
						<ul>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Septembre 2015 - Juillet 2018 :</span>
									<span class="content">Ecole d'ingénieur Informatique à l'Exia.Cesi</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Cette école d'ingénieur se démarque par sa méthode de travail orientée problème (PBL).
											Cette méthode apporte aux étudiants une très forte autonomie et un auto-apprentissage ludique et très riche.
											Durant ces 3 ans, j'ai pu approfondir et améliorer mes compétences en développement informatique ainsi qu'en management d'entreprise.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Décembre 2014 :</span>
									<span class="content">Photoshop CS6 - Avancé</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Formation de quelques jours sur l'outil Photoshop CS6. Une formation menant à un niveau avancé dans l'utilisation de ce logiciel.
											Ecretage, masque, fusion, détourage, déformation 3D etc ... autant de fonctionnalités que j'ai pu étudier et pratiquer dans l'objectif
											d'améliorer mes compétences en web design.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Novembre 2014 :</span>
									<span class="content">Gestion et modélisation des bases de données</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Cette formation porte sur la conception, l'architecture de base de données relationnelles (le modèle Merise)
											et la conception de base de données évolutives.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Novembre 2014 :</span>
									<span class="content">Ergonomie et design des sites web</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											L'ergonomie des sites web est souvent mis de côté par les entreprises et les acteurs du web.
											Cette formation m'a permis de comprendre l'intérêt de l'ergonomie dans les applications web et logiciel et ainsi
											d'acquérir des notions me permettant de faire des sites internet ou des
											applications logiciel plus intuitifs pour les utilisateurs.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Septembre 2014 :</span>
									<span class="content">Base de données Oracle SQL</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Découverte de l'outil Oracle SQL et compréhension des requètes pour la gestion de base de données relationnelles.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Juin 2014 :</span>
									<span class="content">Microsoft Sharepoint 2010</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Formation sur l'utilisation et la découverte de l'outil de travail collaboratif Sharepoint 2010.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Septembre 2009 - Juin 2011 :</span>
									<span class="content">DUT GEII (Génie Electronique et Informatique Industriel)</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											J'ai intégré cette école supérieur, afin d'orienter ma formation vers la robotique et l'électronique de précision.
										</p>
									</div>
								</div>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="date">Juin 2009 :</span>
									<span class="content">Bac STI Electrotechnique (Science et Technique de l'Ingénieur)</span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											Formation initiale qui porte dans le domaine de l'éléctrotechnique
											(Eléctronique, Electrique, Mécanique, Informatique/Programmation, Physique, Mathématique)
										</p>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<section id="competences">
						<div class="title">
							<h2>Compétences</h2>
						</div>
						<ul>
							<li>
								<span class="content">Programmation Logiciel <span class="date">(Langages: C#, C++, C, Java)</span>, Framework <span class="date">(.NET Framework, .NET Core, Boost)</span><br />
								Développement de drivers Windows en User-Mode</span>
							</li>
							<li>
								<span class="content">Développement Web <span class="date">(Langages: PHP, Html, CSS, JavaScript)</span> Angular, jQuery, Synfony, NodeJS</span>
							</li>
							<li>
								<span class="content">Gestionnaire de base de données <span class="date">(OracleSQL, MySQL, SQL Server, PostgreSQL)</span></span>
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
							<li>
								<span class="content">Systèmes d'exploitation <span class="date">(Microsoft Windows, Linux)</span></span>
							</li>
							<li>
								<span class="content">Tests unitaires</span>
							</li>
							<li>
								<span class="content">Notion de TDD</span>
							</li>
							<li class="cv-block">
								<div class="cv-item">
									<span class="content">Autres outils <button class="btn btn-sm btn-danger">+</button></span>
								</div>
								<div class="cv-detail card">
									<div class="card-body">
										<p>
											<b>Logiciels graphiques:</b> Photoshop CS6, Gimp, Paint<br />
											<b>Logiciels de modélisation 3D:</b> Blender<br />
											<b>Logiciels de CAO:</b> FreeCAD, AutoDesk Fusion 360, SolidWorks<br />
											<b>Logiciels de montage vidéo:</b> Premiere Pro, After Effect<br />
											<b>Logiciels de bureautique:</b> Suite Microsoft Office (Word, Excel, PowerPoint)
										</p>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<section id="loisirs">
						<div class="title">
							<h2>Loisirs</h2>
						</div>
						<div class="element-list">
							<span class="element">
								<i class="fas fa-dumbbell"></i><br />
								<span>Sport</span>
							</span>
							<span class="element">
								<i class="fas fa-music"></i><br />
								<span>Piano</span>
							</span>
							<span class="element">
								<i class="fas fa-camera"></i><br />
								<span>Photographie</span>
							</span>
						</div>
					</section>
				</div>
			</div>
		</section>
		<?php include_once("FOOTER.php"); ?>
	</body>
</html>