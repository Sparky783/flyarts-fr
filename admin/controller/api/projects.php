<?php
use ApiCore\Api;
use System\ToolBox;
use System\Session;
use Common\Picture;
use Common\UploadFile;
use FlyArts\Project;

ini_set('memory_limit', '512M');

if(ToolBox::SearchInArray($session->admin_roles, array("admin")))
{
	$app->Post("/projects_list", function($args) {
		include_once(ABSPATH . "model/flyarts/Project.php");

		$projects = Project::GetList();
		$list = array();
		
		foreach($projects as $project)
			$list[] = $project->ToArray();

		API::SendJSON(array('projects' => $list));
	});

	$app->Post("/project_add", function($args) {
		include_once(ABSPATH . "model/system/ToolBox.php");
		include_once(ABSPATH . "model/system/Session.php");
		include_once(ABSPATH . "model/flyarts/Project.php");
		include_once(ABSPATH . "model/UploadFile.php");
		include_once(ABSPATH . "model/Picture.php");

		$project = new Project();
		$project->SetTitle($args['title']);
		$project->SetLink($args['link']);
		$project->SetDescription($args['description']);
		$project->SetVisibility(ToolBox::StringToBool($args['visibility']));
		$project->SetInProgress(ToolBox::StringToBool($args['in_progress']));
		$project->SaveToDatabase();

		$session = Session::getInstance();
		$picture = unserialize($session->current_project_photo);

		if(isset($session->current_project_photo) && $project->GetId())
		{
			$upload_file = unserialize($session->current_project_photo);

			// Création de l'image
			$picture = new Picture();
			$picture->LoadFromFileContent($upload_file->GetFileContent());

			$picture->SaveCopy(ABSPATH . "content/projects_thumbs/" . $project->GetId() . ".jpg", 500, 90);

			$session->current_project_photo = null;
		}

		API::SendJSON($project->GetId());
	});

	$app->Post("/project_edit", function($args) {
		include_once(ABSPATH . "model/system/ToolBox.php");
		include_once(ABSPATH . "model/system/Session.php");
		include_once(ABSPATH . "model/flyarts/Project.php");
		include_once(ABSPATH . "model/UploadFile.php");
		include_once(ABSPATH . "model/Picture.php");
		
		$project = Project::GetById($args['id_project']);
		$project->SetTitle($args['title']);
		$project->SetLink($args['link']);
		$project->SetDescription($args['description']);
		$project->SetVisibility(ToolBox::StringToBool($args['visibility']));
		$project->SetInProgress(ToolBox::StringToBool($args['in_progress']));
		$project->SaveToDatabase();

		$session = Session::getInstance();
		$picture = unserialize($session->current_project_photo);

		if(isset($session->current_project_photo) && $project->GetId())
		{
			$upload_file = unserialize($session->current_project_photo);

			// Création de l'image
			$picture = new Picture();
			$picture->LoadFromFileContent($upload_file->GetFileContent());

			$picture->SaveCopy(ABSPATH . "content/projects_thumbs/" . $project->GetId() . ".jpg", 500, 90);

			$session->current_project_photo = null;
		}

		API::SendJSON($project->GetId());
	});

	$app->Post("/project_remove", function($args) {
		include_once(ABSPATH . "model/flyarts/Project.php");

		API::SendJSON(Project::RemoveFromDatabase($args['id_project']));
	});

	$app->Post("/upload-project-image", function($args) {
		include_once(ABSPATH . "model/system/Session.php");
		include_once(ABSPATH . "model/flyarts/Project.php");
		include_once(ABSPATH . "model/UploadFile.php");
	
		$session = Session::getInstance();
	
		if(isset($_FILES['data'])) {
			$file = $_FILES['data'];
	
			if($file['error'] == 0) {
				// Download the picture
				$name_file = $_POST['name'];
				$extensions = array('.png', '.gif', '.jpg', '.jpeg');
				$ext = strtolower(strrchr($name_file, '.'));
					
				if(in_array($ext, $extensions) and $file['size'] <= 10242880) // 10 Mo
				{
					if(!isset($session->upload_project_photo))
						$upload_file = new UploadFile($name_file, $_POST['tot_parts']);
					else
						$upload_file = unserialize($session->upload_project_photo);
	
					$upload_file->AddPart($_POST['part'], file_get_contents($file['tmp_name']));
	
					// Si toute l'image à était téléchargé
					if($upload_file->IsComplete())
					{
						$session->current_project_photo = serialize($upload_file);
						$session->upload_project_photo = null; // Reset l'upload

						$repsonse = array(
							"status" => "success",
							"part" => $_POST['part'],
							"upload_finished" => true
						);
					}
					else
					{
						$session->upload_project_photo = serialize($upload_file);

						$repsonse = array(
							"status" => "success",
							"part" => $_POST['part'],
							"upload_finished" => false
						);
					}
				}
				else
				{
					$repsonse = array(
						"status" => "error",
						"message" => "The file is not a picture"
					);

					$session->current_project_photo = null;
					$session->upload_project_photo = null;
				}
			} else {
				$repsonse = array(
					"status" => "error",
					"message" => "There is an error with the file",
					"files" => $_FILES
				);

				$session->current_project_photo = null;
				$session->upload_project_photo = null;
			}
		} else {
			$repsonse = array(
				"status" => "error",
				"message" => "There is no file",
				"files" => $_FILES
			);

			$session->current_project_photo = null;
			$session->upload_project_photo = null;
		}
		
		API::SendJSON($repsonse);
	});
}
?>