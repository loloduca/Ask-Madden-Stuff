var check = true;
$(document).ready(function(){
	$(".reset").hide();
})

$(".ask").click(function() {
	if($(".question").val() == false && check == true) {
		$(".fail").append('<p>You need to ask Madden.</p>');
		check = false;
	}else if($(".question").val() != false && check == false){
		$(".welcome").hide();
		$(".fail").remove();
		$(".play").append('<p>This is your play!</p>');
		if($(".question").val() == "alpha") {
			$(".play").append('<img src = "34SHT_Pinch.PNG"/>');
		}
		check = false;
		$(".reset").show();
		$(".question").hide();
		$(".ask").hide();
	}
})

$(".reset").click(function(){
	location.reload();
});
