<?php
include_once(ABSPATH . "model/system/ToolBox.php");
include_once(ABSPATH . "model/flyarts/Project.php");

$projects = Project::GetList();
$currentProjectsHtml = "";
$maxDisplayed = 2;

foreach($projects as $project)
{
    if($maxDisplayed == 0)
        break;

    // Display just project in progress.
    if(!$project->GetInProgress())
        continue;

    if(!$project->GetImagePath())
        continue;

    $currentProjectsHtml .= "
        <div class='col-md-4'>
            <div class='card'>
                <img class='card-img-top' src='" . $project->GetImagePath() . "' alt='Image représentant le project " . $project->GetTitle() . "'>
                <div class='card-body'>
                    <h5 class='card-title md-2'>" . $project->GetTitle() . " <span class='badge bg-info'>En cours</span></h5>
                    <p class='card-text'>" . $project->GetDescription() . "</p>
                    <p class='link text-right'>
                        <a class='btn btn-danger disabled' href='" . $project->GetLink() . "' target='_blank'>Voir le site</a>
                    </p>
                </div>
            </div>
        </div>
    ";

    $maxDisplayed --;
}