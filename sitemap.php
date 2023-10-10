<?php
include_once("prepare.php"); // Chargement de la configuration et de l'ensemble des éléments communs.

use System\Sitemap;

global $router;

header("Content-type: text/xml");

$sitemap = new Sitemap();

$sitemap->addPage($router->getURL("home"), "yearly");
$sitemap->addPage($router->getURL("contact"), "yearly");
$sitemap->addPage($router->getURL("cv"), "yearly");
$sitemap->addPage($router->getURL("cv-papier"), "yearly");
$sitemap->addPage($router->getURL("projects"), "yearly");
$sitemap->addPage($router->getURL("project-retropie"), "yearly");

$sitemap->make();