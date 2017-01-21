$(".ask").click(function() {
	$(".welcome").hide();

	if($(".question").val() == 'alpha') {
		$(".play").append('<p>This is your play!</p>');
		$(".play").append('<img src = "34SHT_Pinch.PNG"/>');
	}

});

