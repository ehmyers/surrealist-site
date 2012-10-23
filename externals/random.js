$(document).ready(function(){
	$("a").click(function(){
		swap_background();
	});
	swap_background();
	changing_active_menu();
	clicked_on_content();
});

/* function time! */

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
	$("#midground").css("background-image", url + "a.png')");
	$("#foreground").css("background-image", url + "b.png')");

	console.log(url);
	console.log($("#background").css("background"));
}

function changing_active_menu(){
	//changing the active menu item
	$(".small_menu a").click(function() {
		$(".small_menu a.active").removeClass("active");
		console.log(this);
		$(this).addClass("active");
		console.log(this);
	 });
}

function clicked_on_content(){
	// showing the content clicked on
	//$("active").hide();
	var active_content = $(this).children("a").attr("menu_item");
	$(active_content).removeClass("active");
	$(active_content).addClass("active");
	$(".info_box").css("display", "block");
}

//function swap_favicon(){
	// swapping favicons
	//	var secondrandom = Math.ceil(Math.random()*8);
	//	var url = "url('images/favicons/favicon" + secondrandom + ".ico");
//}