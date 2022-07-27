<?php
include_once(ABSPATH . "model/system/ToolBox.php");
include_once(ABSPATH . "model/flyarts/Project.php");

$projects = Project::GetList();
$projectsHtml = "";

foreach($projects as $project)
{
    if(!$project->GetVisibility())
        continue;

    if(!$project->GetImagePath())
        continue;
	
	$progressTitle = "";
	$progressButton = "";
	
    if($project->GetInProgress())
	{
		$progressTitle = " <span class='badge bg-info'>En cours</span>";
        $progressButton = " disabled";
	}

    $projectsHtml .= "
        <div class='col-md-4'>
            <div class='card'>
                <img class='card-img-top' src='" . $project->GetImagePath() . "' alt='Image représentant le project " . $project->GetTitle() . "'>
                <div class='card-body'>
                    <h5 class='card-title md-2'>" . $project->GetTitle() . $progressTitle . "</h5>
                    <p class='card-text'>" . $project->GetDescription() . "</p>
                    <p class='link text-right'>
                        <a class='btn btn-danger" . $progressButton . "' href='" . $project->GetLink() . "' target='_blank'>Voir le site</a>
                    </p>
                </div>
            </div>
        </div>
    ";
}