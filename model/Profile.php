<?php
require_once(ABSPATH . "model/system/ToolBox.php");

class Profile
{
	// == ATTRIBUTS ==
	private $id;
	private $nom;
	private $prenom;
	private $sexe;
	private $date_naissance;
	
	private $adresse;
	private $telephone;
	private $portable;

	private $taille;
	private $poids;

	
	// == METHODES PRIMAIRES ==
	public function __construct($nom = "", $prenom = "") {
		$this->id = null;
		$this->SetNom($nom);
		$this->SetPrenom($prenom);
		$this->sexe = false;
		$this->date_naissance = "0000-00-00";
		$this->adresse = array();
		$this->telephone = "";
		$this->portable = "";
		$this->taille = null;
		$this->poids = null;
	}

	
	public function GetId() {
		return $this->id;
	}

	public function GetNom() {
		return $this->nom;
	}

	public function GetPrenom() {
		return $this->prenom;
	}

	public function GetSexe() {
		return $this->sexe;
	}

	public function GetDateNaissance() {
		return $this->date_naissance;
	}

	public function GetAge() {
		return Profil::age($this->date_naissance);
	}

	public function GetAdresse() {
		return $this->adresse['adresse'];
	}

	public function GetCodePostal() {
		return $this->adresse['code_postal'];
	}

	public function GetVille() {
		return $this->adresse['ville'];
	}

	public function GetPays() {
		return $this->adresse['pays'];
	}

	public function GetTelephone() {
		return $this->telephone;
	}

	public function GetPortable() {
		return $this->portable;
	}

	public function GetTaille() {
		return $this->taille;
	}

	public function GetPoids() {
		return $this->poids;
	}
	
	public function SetId($id = null) {
		if($this->id == null or $this->id == "")
			$this->id = sha1("profil".mt_rand().microtime());
		else
			$this->id = $id;
	}

	public function SetNom($nom) {
		if(preg_match("/^[a-zéèàêâùïüëçA-Z -]{2,40}$/", $nom)) {
			$this->nom = $nom;
			return true;
		}
		return false;
	}

	public function SetPrenom($prenom) {
		if(preg_match("/^[a-zéèàêâùïüëçA-Z -]{2,30}$/", $prenom)) {
			$this->prenom = $prenom;
			return true;
		}
		return false;
	}

	public function SetSexe($sexe) {
		if($sexe === true or $sexe === false) {
			$this->sexe = $sexe;
			return true;
		}
		return false;
	}

	public function SetDateNaissance($date_naissance) {
		if(preg_match("/^\d{5,100}$/", $date_naissance)) {
			$this->date_naissance = date("Y-m-d", $date_naissance);
			return true;
		}else if(preg_match("/^(\d{4})-(\d{2})-(\d{2})$/", $date_naissance)) {
			$this->date_naissance = $date_naissance;
			return true;
		}
		return false;
	}

	public function SetPseudo($pseudo) {
		if(preg_match("/[a-zA-Z0-9_!?\[\[{}()<>@+-]{0,20}/", $pseudo)) {
			$this->pseudo = $pseudo;
			return true;
		}
		return false;
	}

	public function SetAdresse($adresse) {
		if(preg_match("/^[a-zA-Z0-9 ,-\/éèàêâùïüëç]{0,50}$/", $adresse)) {
			$this->adresse['adresse'] = $adresse;
			return true;
		}
		return false;
	}

	public function SetCodePostal($code_postal) {
		if(preg_match("/^[0-9]{2} ?[0-9]{3}$/", $code_postal)) {
			$this->adresse['code_postal'] = $code_postal;
			return true;
		}
		return false;
	}

	public function SetVille($ville) {
		if(preg_match("/^[a-zéèàêâùïüëçA-Z\/ -]{2,50}$/", $ville)) {
			$this->adresse['ville'] = $ville;
			return true;
		}
		return false;
	}

	public function SetPays($pays) {
		if(preg_match("/^[a-zéèàêâùïüëçA-Z\/ -]{2,50}$/", $pays)) {
			$this->adresse['pays'] = $pays;
			return true;
		}
		return false;
	}

	public function SetEmail($email) {
		if(preg_match("/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/", $email)) {
			$this->email = $email;
			return true;
		}
		return false;
	}

	public function SetTelephone($telephone) {
		if(preg_match("/^0[1-59]([-. ]?[0-9]{2}) {4}$/", $telephone)) {
			$this->telephone = $telephone;
			return true;
		}
		return false;
	}

	public function SetPortable($portable) {
		if(preg_match("/^0[67]([-. ]?[0-9]{2}) {4}$/", $portable)) {
			$this->portable = $portable;
			return true;
		}
		return false;
	}

	public function SetTaille($taille) {
		if($taille > 0 and $taille < 250) {
			$this->taille = $taille;
			return true;
		}
		return false;
	}

	public function SetPoids($poids) {
		if($poids > 0 and $poids < 200) {
			$this->poids = $poids;
			return true;
		}
		return false;
	}

	public function SetQuestionSecrete($question_secrete) {
		if($question_secrete != "") {
			$this->question_secrete = $question_secrete;
			return true;
		}
		return false;
	}

	public function SetDateInscription($date_inscription = null) {
		if($date_inscription) {
			if(preg_match("/^\d{5,100}$/", $date_inscription))
				$this->date_inscription = date("Y-m-d H:i:s", $date_inscription);
			else if(preg_match("/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/", $date_inscription))
				$this->date_inscription = $date_inscription;
		}else
			$this->date_inscription = date("Y-m-d H:i:s");
	}

	public function SetLastConnexion($last_connexion = null) {
		if($last_connexion) {
			if(preg_match("/^\d{5,100}$/", $last_connexion))
				$this->last_connexion = date("Y-m-d H:i:s", $last_connexion);
			else if(preg_match("/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/", $last_connexion))
				$this->last_connexion = $last_connexion;
		}else
			$this->last_connexion = date("Y-m-d H:i:s");
	}

	public function SetStatut($statut) {
		$this->statut = $statut;
	}

	public function SetActivation($activation) {
		$this->activation = $activation;
	}

	public function SetParametres($parametres) {
		$this->parametres = $parametres;
	}

	public function SetMotDePasse($mdp, $mot_suplementaire = "") {
		if(preg_match("/^[a-zA-Z0-9~!@#$%^&*()-_=+[\]{};:,.<>\/?]{4,30}$/", $mdp)) {
			$this->mot_de_passe = $this->hacker($mdp);
			var_dump($mdp); exit;
			$this->cle_mot_de_passe = self::cryptage($mdp, $this->generateurCle($mot_suplementaire));
			return true;
		}
		return false;
	}

	public function SetNouveauMotDePasse($ancien_mdp, $nouveau_mdp, $confirmation_mdp, $mot_suplementaire = "") {
		if(preg_match("/^[a-zA-Z0-9~!@#$%^&*()-_=+[\]{};:,.<>\/?]{4,30}$/", $nouveau_mdp)) {
			if(($this->hacker($ancien_mdp) == $this->mot_de_passe) and ($nouveau_mdp == $confirmation_mdp)) {
				$this->mot_de_passe = $this->hacker($nouveau_mdp);
				$this->cle_mot_de_passe = Profil::cryptage($nouveau_mdp, $this->generateurCle($mot_suplementaire));
				return true;
			}
		}
		return false;
	}
}