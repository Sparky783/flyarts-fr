<?php
// ==== Access security ====
if(!$session->admin_isConnected || !ToolBox::SearchInArray($session->admin_roles, array("admin")))
	WebSite::Redirect("login", true);
// =========================

// Crée l'objet d'upload des photos
$session = Session::getInstance();
$session->upload_project_photo = null;
$session->current_project_photo = null;
?>