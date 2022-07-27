<?php
include_once("prepare.php"); // Chargement de la configuration et de l'ensemble des éléments communs.

include_once(ABSPATH . "model/system/Sitemap.php");

global $router;

header("Content-type: text/xml");

$sitemap = new Sitemap();

$sitemap->AddPage($router->GetURL("home"), "yearly");
$sitemap->AddPage($router->GetURL("contact"), "yearly");
$sitemap->AddPage($router->GetURL("cv"), "yearly");
$sitemap->AddPage($router->GetURL("cv-papier"), "yearly");
$sitemap->AddPage($router->GetURL("projects"), "yearly");
$sitemap->AddPage($router->GetURL("project-retropie"), "yearly");

$sitemap->Make();