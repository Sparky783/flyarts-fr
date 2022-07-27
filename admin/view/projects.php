<?php global $router; ?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<?php include_once("HEAD.php"); ?>
		<title><?php echo TITLE; ?> - Projets</title>
		
		<link rel="stylesheet" type="text/css" href="admin/view/css/projects.css" />
		<script type="text/javascript" src="admin/view/js/upload-project.js"></script>
		<script type="text/javascript" src="admin/view/js/projects.js"></script>
		<script type="text/javascript">
			var api_url = "<?php $router->API(""); ?>";

			$(document).ready(function(){
				$("#uploadProject").UploadOneProject({
					url: '<?php $router->API("upload-project-image"); ?>',
					acceptFileTypes: /(\.|\/)(jpe?g|png)$/i,
				});
			});
		</script>
	</head>
	<body>
		<?php include_once("HEADER.php"); ?>
		<div class="container">
			<div class="row">
				<section class="col-md-12">
					<h1>Gestionnaire des projets</h1>
					<div class="card">
						<div class="card-header clearfix">
							<span id="nbProjectsText" class="float-left">Il y a <span id="nbProjects"></span> projets</span>
							<button id="addProjectButton" class="btn btn-primary float-right" type="button"><i class="fas fa-plus-circle"></i> Ajouter un projet</button>
						</div>
						<table id="tableProjects" class="card-body table table-hover">
							<thead>
								<tr>
									<th scope="col">Titre</th>
									<th scope="col">Image</th>
									<th scope="col">Afficher</th>
									<th scope="col">En cours</th>
									<th class="text-right" scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</div>
		<?php include_once("FOOTER.php"); ?>
		
		<!-- Modals -->
		<div id="editProjectModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<form action="" method="post">
						<div class="modal-header">
							<h5 class="modal-title">Ajouter un projet</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div class="form-group">
								<label for="titleInput">Titre</label>
								<input id="titleInput" class="form-control" type="text"/>
							</div>
							<div class="form-group">
								<label for="linkInput">Link</label>
								<input id="linkInput" class="form-control" type="text"/>
							</div>
							<div class="form-group">
								<label for="imageInput">Image</label>
								<div id="uploadProject">
									<div class='uploadFile-preview'>
										<div class='uploadFile-preview-box'>
											<div class='uploadFile-preview-info'>
												<div class='uploadFile-preview-img'></div>
											</div>
											<div class='uploadFile-preview-overlay'>
												<div class='uploadFile-preview-progress progress'>
													<div class='progress-bar' role='progressbar' aria-valuemin='0' aria-valuemax='100'></div>
												</div>
											</div>
										</div>
									</div>
									<div class="uploadFile-drop">
										<span class="uploadFile-button btn btn-sm btn-primary">
											<i class="fa fa-pen"></i>
										</span>
										<input class="uploadFile-input" type="file" name="file">
									</div>
								</div>
							</div>

							<div class="form-group">
								<label for="descriptionInput">Description</label>
								<textarea id="descriptionInput" class="form-control"></textarea>
							</div>
							<div class="row edit-option">
								<div class="col-md-6">
									<div class="form-check form-switch">
										<input id="visibilityInput" class="form-check-input" type="checkbox" role="switch" checked>
										<label class="form-check-label" for="visibilityInput">Afficher</label>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-check form-switch">
										<input id="inProgressInput" class="form-check-input" type="checkbox" role="switch">
										<label class="form-check-label" for="inProgressInput">En cours</label>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Annuler</button>
							<button class="accepteButton btn btn-primary" type="submit">Ajouter</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		
		<div id="removeProjectModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<form action="" method="post">
						<div class="modal-header">
							<h5 class="modal-title">Supprimer un projet</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							Voulez-vous vraiment supprimer le projet "<span id="nameProject"></span>"?
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Non</button>
							<button class="btn btn-primary" type="submit">Oui</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</body>
</html>