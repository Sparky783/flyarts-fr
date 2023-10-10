<?php
use FlyArts\Project;

$projects = Project::getList();
$currentProjectsHtml = '';
$maxDisplayed = 2;

foreach ($projects as $project) {
    if ($maxDisplayed === 0) {
        break;
    }

    // Display just project in progress.
    if (!$project->getInProgress()) {
        continue;
    }

    if (!$project->getImagePath()) {
        continue;
    }

    $currentProjectsHtml .= <<<HTML
        <div class='col-md-4'>
            <div class='card'>
                <img class='card-img-top' src='{$project->getImagePath()}' alt='Image représentant le project {$project->getTitle()}'>
                <div class='card-body'>
                    <h5 class='card-title md-2'>{$project->getTitle()} <span class='badge bg-info'>En cours</span></h5>
                    <p class='card-text'>{$project->getDescription()}</p>
                    <p class='link text-right'>
                        <a class='btn btn-danger disabled' href='{$project->getLink()}' target='_blank'>Voir le site</a>
                    </p>
                </div>
            </div>
        </div>
    HTML;

    $maxDisplayed --;
}