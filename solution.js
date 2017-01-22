$(".ask").click(function() {
	if($(".question").val() == true) {
		$(".welcome").hide();
		$(".play").append('<p>This is your play!</p>');
		if($(".question").val() == "alpha") {
			$(".play").append('<img src = "34SHT_Pinch.PNG"/>');
		}
	}

});

