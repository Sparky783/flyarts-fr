<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include_once("prepare.php"); // Chargement de la configuration et de l'ensemble des éléments communs.
include_once(ABSPATH . "model/system/WebSite.php");

$website = new WebSite();

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