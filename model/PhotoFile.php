<?php
class PhotoFile
{
	private $name;
	private $tot_parts;
	private $datas;

	
	public function __construct($name = "", $tot_parts = 1) {
		$this->name = $name;
		$this->tot_parts = $tot_parts;
		$this->datas = array();

		for($i = 0; $i < $tot_parts; $i ++)
			$this->datas[] = "";
	}

	public function AddPart($posPart, $data) {
		$pos = intval($posPart);
		$this->datas[$pos] = $data;
	}

	public function IsComplete() {
		foreach ($this->datas as $data){
			if($data == "")
				return false;
		}
		return true;
	}
	
	public function GetName() {
		return $this->name;
	}

	public function GetFileContent() {
		$content = "";

		foreach ($this->datas as $data)
			$content .= $data;
		
		return $content;
	}

	public function Clean() {
		$this->name = "";
		$this->tot_parts = 0;
		$this->datas = array();
	}
}