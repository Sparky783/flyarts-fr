<?php
// ==== Access security ====
if(!$session->admin_isConnected)
	WebSite::Redirect("login", true);
// =========================

global $router;

// Nom de l'utilisateur connecté
$name = $session->admin_name;

// Lien disponible pour l'utilisateur connecté
$links = "";

if(ToolBox::SearchInArray($session->admin_roles, array("admin")))
	$links .= "<a class='btn btn-secondary btn-lg btn-block' href='" . $router->GetUrl("projects") . "'><i class='fas fa-cog'></i> Projets</a>";

if(ToolBox::SearchInArray($session->admin_roles, array("admin")))
	$links .= "<a class='btn btn-secondary btn-lg btn-block' href='" . $router->GetUrl("options") . "'><i class='fas fa-cog'></i> Options du site</a>";

if(ToolBox::SearchInArray($session->admin_roles, array("admin")))
	$links .= "<a class='btn btn-secondary btn-lg btn-block' href='" . $router->GetUrl("admins") . "'><i class='fas fa-cog'></i> Administrateurs</a>";
?>