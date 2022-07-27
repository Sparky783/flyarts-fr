/* =======================================
 * This plugin is made by Sparky to upload one image.
 * and it needs Bootstrap 4
 * =======================================
 */

(function($) {
	$.fn.UploadOneProject = function(options = {}) {
		var defaults = {
			url: '/',               // URL where to send files.
			autoUpload: true,       // Download automaticaly when files are selected.
			acceptFileTypes: null,  // Type of accepted files.
			maxFileSize: 10000,     // Max size for each file. 10000 = 10ko
			idName: ""
		};
		var Options = $.extend(defaults, options);
		var Element = $(this);

		var UFile = function(options) {
			var vars = null;
			var id = null;
			var file = null;
			var size = 0;
			var loaded = [];
			var nb_parts = 0;
			var error = false;

			// Constructor
			this.construct = function(options) {
				vars = options;
				id = options.id;
				file = options.file;
				size = file.size;

				mignature();
			};

			this.send = function() {
				vars.dom.find(".uploadFile-preview-overlay").show();
				vars.dom.find('.uploadFile-preview-progress').show();

				// Split the file in blocks
				const BYTES_PER_CHUNK = 2 * 1024 * 1024; // 2MB chunk sizes.
				var blobs = [];
				var start = 0;
				var end = BYTES_PER_CHUNK;

				while(start < size) {
					blobs.push(file.slice(start, end));
					start = end;
					end = start + BYTES_PER_CHUNK;
				}

				// Upload each block
				var blobSize = blobs.length;
				nb_parts = blobs.length;
				var blobPos = 0;

				while(blobPos < blobSize) {
					var data = new FormData();
					data.append("name", file.name);
					data.append("size", file.size);
					data.append("part", blobPos);
					data.append("tot_parts", blobSize);
					data.append("data", blobs[blobPos]);
					
					$.ajax({
						url: vars.url,
						type: 'POST',
						data: data,
						processData: false,
						contentType: false,

						success: function(response, status) {
							console.log(response);
							
							if(response.status == "success" && !error) {
								nb_parts --;
								
								if(nb_parts <= 0) {
									blobs = null;
									
									vars.dom.find('.uploadFile-preview-overlay').hide();
									vars.parent.Update();
								}
							} else {
								updateError();
							}
						},

						error: function(result, status, error){
							console.log(result);
							console.log(status);
							console.log(error);

							updateError();
						},

						xhr: function() // Progress
						{
							var xhr = new window.XMLHttpRequest();
							var part = blobPos;

							xhr.upload.addEventListener("progress", function(evt){
								if (evt.lengthComputable)
									loadedPart(part, evt.loaded);
							}, false);

							return xhr;
						}
					});
					
					blobPos ++;
				}
			};

			var updateError = function() {
				vars.dom.find('.uploadFile-preview-progress').hide();
				alert("Une erreur est survenue durant l'upload de la photo.");

				nb_parts = 0;
				error = true;
				vars.parent.Update();
			};

			var mignature = function() {
				vars.dom.find(".uploadFile-preview-img").css("background-image", "url(" + window.URL.createObjectURL(vars.file) + ")");
			};

			var loadedPart = function(part, loaded_data) {
				loaded[part] = loaded_data;

				var loaded_tot = 0;
				for (var i = loaded.length - 1; i >= 0; i--)
					loaded_tot += loaded[i];

				if(loaded_tot < size) {
					var percentComplete = loaded_tot / size * 100;
					vars.dom.find('.uploadFile-preview-progress div').css('width', percentComplete + "%");
				}
			};

			// Pass options when class instantiated
			this.construct(options);
		};

		// Main object
		var Upload = {
			file_uploaded: null,  // List of files to send.
			is_runing: false, // Number of file in uploading.
			
			Init: function () {
				Element.find(".uploadFile-input").hide();
				Element.find(".uploadFile-button").click(function(){
					Element.find(".uploadFile-input").click();
				});
				this.InitDragDrop();

				Element.find(".uploadFile-preview-overlay").hide();

				// Send
				Element.find(".uploadFile-input").change(function(){
					Upload.Handle(this.files);
				});
			},

			InitDragDrop: function() {
				window.URL = window.URL || window.webkitURL;
				
				Element.bind("dragenter dragover", function(){
					Element.find(".uploadFile-drop").addClass("droped");
					return false;
				});
				Element.bind("dragleave", function(){
					Element.find(".uploadFile-drop").removeClass("droped");
					return false;
				});
				Element.bind("drop", function(event){
					Element.find(".uploadFile-drop").removeClass("droped");
					
					if(event.originalEvent.dataTransfer){
						if(event.originalEvent.dataTransfer.files.length) {
							event.preventDefault();
							event.stopPropagation();
							Upload.Handle(event.originalEvent.dataTransfer.files);
						}  
					}
				});
			},

			Handle: function (files) {
				var file = files[0];

				if(file != null && !this.is_runing) {
					console.log("File Added");
					
					if(file.type.match(Options.acceptFileTypes)) { // If the file has the good type.
						this.file_uploaded = new UFile({id: Options.idName, parent: this, dom: Element, url: Options.url, file: file});
						this.is_runing = true;
						this.file_uploaded.send();
					} else
						alert("Le format du fichier n'est pas bon.");

					console.log("Run transfert");
				}
			},

			Update: function () {
				this.is_runing = false;
			}
		};

		Upload.Init();
	};
})(jQuery);