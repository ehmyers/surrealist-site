$(document).ready(function(){
	var randomnumber = Math.ceil(Math.random()*11);
	if(randomnumber < 10) {
		var url = "url('../images/rotatable_bkds/surrealist_0" + randomnumber + ".jpg');";
	}
	else {
		var url = "url('../images/rotatable_bkds/surrealist_" + randomnumber + ".jpg');";
	}
	console.log(url);

	$("#background").css("background-image", url);
	$("#midground").css("background-image", url);
	$("#foreground").css("background-image", url);

	console.log($("#background").css("background"));
});