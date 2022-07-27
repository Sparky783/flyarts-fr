<?php
if(ToolBox::SearchInArray($session->admin_roles, array("admin")))
{
	$app->Post("/apply_options", function($args) {
		include_once(ABSPATH . "model/system/ToolBox.php");
		include_once(ABSPATH . "model/Options.php");

		$session = Session::getInstance();
		
		if(isset($session->websiteOptions))
		{
			$options = unserialize($session->websiteOptions);

			// Récupération des données
			$options->IS_OPEN_INSCRIPTION = $args['open_inscription'];
			$options->INSCRIPTION_MIN_DATE = $args['min_date_inscription'];
			$options->INSCRIPTION_MAX_DATE = $args['max_date_inscription'];

			if($options->SaveToDatabase())
				$session->websiteOptions = serialize($options);
		}
	});
}
?>