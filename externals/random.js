$(document).ready(function(){
	$("a").click(function(){
		swap_background();

		// showing the content clicked on
		$("active").hide();
		var active_menu = $(this).children("a").attr("menu_item");
		$(active_menu).removeClass("active");
		$("menu_item").addClass("active");
		$("menu_item").fadeIn();

	});

	swap_background();

	//changing the active menu item
	$(".small_menu a").click(function() {
		$(".small_menu a.active").removeClass("active");
		$(this).addClass("active");
	 });
});

// most important thing ever.
function swap_background(){
	// changing the background image on click
	var randomnumber = Math.ceil(Math.random()*10);
	if(randomnumber < 10) {
		var url = "url('images/rotatable_bkds/surrealist_0" + randomnumber;
	}
	else {
		var url = "url('images/rotatable_bkds/surrealist_" + randomnumber;
	}

	$("#background").css("background-image", url + ".jpg')");
	$("#midground").css("background-image", url + ".jpg')");
	$("#foreground").css("background-image", url + "b.jpg')");

	console.log(url);

	console.log($("#background").css("background"));
}

// swapping favicons
//function swap_favicon(){
//	var secondrandom = Math.ceil(Math.random()*8);
//	var url = "url('images/favicons/favicon" + secondrandom + ".ico");
//}