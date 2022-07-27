$(document).ready(function(){
	ProjectManager.Init();
});

var ProjectManager = {
	projects: null,
	selectedProject : null,
	currentModal: null,
	action: "",

	Init: function () {		
		$("#addProjectButton").click(function(){
			ProjectManager.selectedProject = null;
			ProjectManager.action = "project_add";

			$('#editProjectModal').find(".modal-title").text("Ajouter un projet");
			$('#editProjectModal').find(".accepteButton").text("Ajouter");
			$('#editProjectModal').find("input, textarea, select").val("");
			
			if(ProjectManager.selectedProject != null)
				$("#uploadProject .uploadFile-preview-img").css("background-image", "url(" + ProjectManager.selectedProject.image + ")");

			ProjectManager.currentModal = new bootstrap.Modal(document.getElementById("editProjectModal"), {});
			ProjectManager.currentModal.show();
		});
	
		$('#editProjectModal').find("form").submit(function(){
			var data = {
				title: $('#editProjectModal').find("#titleInput").val(),
				link: $('#editProjectModal').find("#linkInput").val(),
				description: $('#editProjectModal').find("#descriptionInput").val(),
				visibility: $('#editProjectModal').find("#visibilityInput").is(':checked'),
				in_progress: $('#editProjectModal').find("#inProgressInput").is(':checked')
			};

			if(ProjectManager.action == "project_edit")
			{
				data.id_project = ProjectManager.selectedProject.id_project;
				console.log("tests")
			}

			$.ajax({
				url: api_url + ProjectManager.action,
				type: "POST",
				data: data,
				success: function() {
					ProjectManager.Refresh();
					ProjectManager.currentModal.hide();
				}
			});
	
			return false;
		});

		$('#removeProjectModal').find("form").submit(function(){
			$.ajax({
				url: api_url + "project_remove",
				type: "POST",
				data: {
					id_project: ProjectManager.selectedProject.id_project
				},
				success: function() {
					ProjectManager.Refresh();
					ProjectManager.currentModal.hide();
				}
			});
	
			return false;
		});
	
		this.Refresh();
	},
	
	Refresh: function () {
		$.ajax({
			url: api_url + "projects_list",
			type: "POST",
			success: function(data) {
				ProjectManager.projects = data.projects;
				
				$("#nbProjects").html(ProjectManager.projects.length + "");
				
				$("#tableProjects tbody").html("");
				
				for(var i = 0; i < ProjectManager.projects.length; i ++)
					ProjectManager.AddProject(ProjectManager.projects[i]);
			}
		});
	},
	
	AddProject: function(project) {
		var actions = $("<td class='text-right'><div class='btn-group'></div></td>");
		actions.find("div").append("<button class='modify-project btn btn-secondary' data-id='" + project.id_project + "'><i class='fas fa-pen'></i></button> ");
		actions.find("div").append("<button class='remove-project btn btn-danger' data-id='" + project.id_project + "'><i class='fas fa-trash-alt'></i></button>");
		
		actions.find(".modify-project").click(function(){
			ProjectManager.selectedProject = project;
			ProjectManager.action = "project_edit";
			
			$('#editProjectModal').find(".modal-title").text("Modifier le projet");
			$('#editProjectModal').find(".accepteButton").text("Modifier");
			$('#editProjectModal').find("#titleInput").val(ProjectManager.selectedProject.title);
			$('#editProjectModal').find("#linkInput").val(ProjectManager.selectedProject.link);
			$('#editProjectModal').find("#descriptionInput").val(ProjectManager.selectedProject.description);
			$('#editProjectModal').find("#visibilityInput").val(ProjectManager.selectedProject.visibility);
			$('#editProjectModal').find("#inProgressInput").val(ProjectManager.selectedProject.in_progress);

			$("#uploadProject .uploadFile-preview-img").css("background-image", "url(" + ProjectManager.selectedProject.image + ")");
			
			ProjectManager.currentModal = new bootstrap.Modal(document.getElementById("editProjectModal"), {});
			ProjectManager.currentModal.show();
		});
		
		actions.find(".remove-project").click(function(){
			ProjectManager.selectedProject = project;
			$("#removeProjectModal").find("#nameProject").html(ProjectManager.selectedProject.title);

			ProjectManager.currentModal = new bootstrap.Modal(document.getElementById("removeProjectModal"), {});
			ProjectManager.currentModal.show();
		});
	
		var row = $("<tr></tr>");
		row.append("<td>" + project.title + "</td>");
		row.append("<td>" + project.id + "</td>");
		row.append("<td>" + project.visibility + "</td>");
		row.append("<td>" + project.in_progress + "</td>");
		row.append(actions);
		
		$("#tableProjects tbody").append(row);
	},
	
	GetProject: function(id_project) {
		for(var i = 0; i < ProjectManager.projects.length; i ++)
		{
			if(ProjectManager.projects[i].id_project == id_project)
				return ProjectManager.projects[i];
		}
	}
}