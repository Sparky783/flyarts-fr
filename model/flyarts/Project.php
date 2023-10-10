<?php
namespace FlyArts;
use System\Database;
use System\ToolBox;

class Project
{
	const FILE_PROJECTS_PATH = "content/projects_thumbs";

	// == ATTRIBUTS ==
	private $id = null;
	private $title = "";
	private $description = "";
	private $link = "";
	private $visibility = true;
	private $in_progress = "";

	// == METHODES PRIMAIRES ==
	public function __construct($dbData = null)
	{
		if($dbData != null)
		{	
			$this->id = intval($dbData['id_project']);
			$this->title = $dbData['title'];
			$this->description = $dbData['description'];
			$this->link = $dbData['link'];
			$this->visibility = boolval($dbData['visibility']);
			$this->in_progress = boolval($dbData['in_progress']);
		}
	}
	
	// == METHODES GETTERS ==
	public function GetId()
	{
		return $this->id;
	}

	public function GetTitle()
	{
		return $this->title;
	}

	public function GetDescription()
	{
		return $this->description;
	}

	public function GetLink()
	{
		return $this->link;
	}

	public function GetVisibility()
	{
		return $this->visibility;
	}

	public function GetInProgress()
	{
		return $this->in_progress;
	}

	public function GetImagePath()
	{
		 
		if($this->id == null)
			return false;

		$link = self::FILE_PROJECTS_PATH . "/" . $this->id . ".jpg";

		if(file_exists($link))
			return $link;

		return false;
	}
	
	// == METHODES SETTERS ==
	public function SetId($id)
	{
		$this->id = intval($id);
	}

	public function SetTitle($title)
	{
		$this->title = trim($title);
	}
	
	public function SetDescription($description)
	{
		$this->description = $description;
	}

	public function SetLink($link)
	{
		$this->link = trim($link);
	}

	public function SetVisibility($visibility)
	{
		$this->visibility = $visibility;
	}

	public function SetInProgress($in_progress)
	{
		$this->in_progress = $in_progress;
	}
	
	// == AUTRES METHODES ==
	public function SaveToDatabase()
	{
		$database = new Database();

		if($this->id == null) // Insert
		{
			$id = $database->Insert(
				"projects",
				array(
					"title" => $this->title,
					"description" => $this->description,
					"link" => $this->link,
					"visibility" => $this->visibility,
					"in_progress" => $this->in_progress,
				)
			);

			if($id !== false)
			{
				$this->id = intval($id);
				return true;
			}
			
			return false;
		}
		else // Update
		{
			$result = $database->Update(
				"projects", "id_project", $this->id,
				array(
					"title" => $this->title,
					"description" => $this->description,
					"link" => $this->link,
					"visibility" => $this->visibility,
					"in_progress" => $this->in_progress,
				)
			);

			return $result;
		}
	}

	public function ToArray()
	{
		return array(
			"id_project" => $this->id,
			"title" => $this->title,
			"description" => $this->description,
			"link" => $this->link,
			"visibility" => $this->visibility,
			"in_progress" => $this->in_progress,
			"image" => $this->GetImagePath()
		);
	}

	// ==============================================================================
	// ==== Fonctions statiques =====================================================
	// ==============================================================================
	static public function GetById($id_project)
	{
		$database = new Database();

		$rech = $database->Query(
			"SELECT * FROM projects WHERE id_project=:id_project",
			array("id_project" => intval($id_project))
		);

		if($rech != null)
		{
			$data = $rech->fetch();

			return new Project($data);
		}
		
		return false;
	}

	static public function GetList()
	{
		$database = new Database();
		$models = $database->Query("SELECT * FROM projects");

		if($models != null)
		{
			$list = array();

			while($data = $models->fetch())
				$list[] = new Project($data);

			return $list;
		}
		
		return false;
	}

	static public function RemoveFromDatabase($id)
	{
		self::RemoveFile($id);
		
		$database = new Database();

		return $database->Delete("projects", "id_project", intval($id));
	}

	static public function RemoveFile($id)
	{
		ToolBox::RemoveFile(self::FILE_PROJECTS_PATH . "/" . $id . ".jpg");
	}
}