<?php

include_once(ABSPATH . "model/system/WebSite.php");
include_once(ABSPATH . "model/system/Session.php");

$session = Session::getInstance();

$website = new WebSite(true); // true = Enable admin mode

$website->SetPages(array(
	"login",
	"home",
	"profil",
	"admins",
	"options",
	"projects"
));
$website->DefaultPage("login");

$website->Run();