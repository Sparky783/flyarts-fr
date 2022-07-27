$(document).ready(function(){
	CV.Init();
});

var CV = {
	selected: null,

	Init: function () {
		$(".cv-detail").hide();

		$(".cv-item").click(function(){
			var index = $(".cv-item").index($(this));

			if(index != CV.selected) {
				CV.selected = index;
				$(".cv-detail").slideUp(400);
				$(this).parent().find(".cv-detail").slideDown(400);
			} else {
				$(this).parent().find(".cv-detail").slideUp(400);
				CV.selected = null;
			}
		});
	}
};