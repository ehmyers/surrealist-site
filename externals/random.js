$(document).ready(function(){
	$("a").click(swap_background());
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
		var url = "url('images/rotatable_bkds/surrealist_0" + randomnumber + ".jpg')";
	}
	else {
		var url = "url('images/rotatable_bkds/surrealist_" + randomnumber + ".jpg')";
	}
	console.log(url);

	$("#background").css("background-image", url);
	$("#midground").css("background-image", url);
	$("#foreground").css("background-image", url);

	console.log($("#background").css("background"));
}