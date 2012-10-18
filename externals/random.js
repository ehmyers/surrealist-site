$(document).ready(function(){
	$("a").click(function(){
		swap_background();
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