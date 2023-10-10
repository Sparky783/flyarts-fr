<?php
use System\ToolBox;
use System\WebSite;

// ==== Access security ====
if(!$session->admin_isConnected || !ToolBox::SearchInArray($session->admin_roles, array("admin")))
	WebSite::Redirect("login", true);
// =========================
?>