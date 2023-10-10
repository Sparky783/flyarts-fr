<?php
use System\WebSite;

include_once("prepare.php"); // Chargement de la configuration et de l'ensemble des éléments communs.

$website = new WebSite(ABSPATH);

$website->SetPages(array(
	"home",
	"contact",
	"cv",
	"cv-papier",
	"projects",
	"project-retropie"
));
$website->DefaultPage("home");

$website->Run();