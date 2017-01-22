var check = true;
$(document).ready(function(){
	$(".reset").hide();
})

$(".ask").click(function() {
	var x = Math.floor((Math.random() * 100) + 1);

	if($(".question").val() == false && check == true) {
		$(".fail").append('<p>You need to ask Madden.</p>');
		check = false;
	}else if($(".question").val() != false && check == false){
		$(".welcome").hide();
		$(".fail").remove();
		$(".play").append('<p>This is your play!</p>');
		
		if($(".question").val().search('alpha') != -1) { //DEFENSE
			if(x > 0 || x < 25) {
				$(".play").append('<img src = "34OddMarlinExchange.PNG"/>');
			}
			else if(x > 25 || x < 50) {
				$(".play").append('<img src = "34QueensDeep.PNG"/>');
			}
			else if(x > 50 || x < 75) {
				$(".play").append('<img src = "34SHT_Pinch.PNG"/>');
			}				
			else if(x > 75 || x < 100) {
				$(".play").append('<img src = "34UnderPirate.PNG"/>');
			}					
		}

		if($(".question").val().search('beta') != -1) {
			if(x > 0 || x < 3) {
				$(".play").append('<img src = "ILeft37Pwr.PNG"/>');
			}
			else if(x > 3 || x < 6) {
				$(".play").append('<img src = "IRight24FakeGoPass.PNG"/>');
			}
			else if(x > 6 || x < 9) {
				$(".play").append('<img src = "IRight33Dive.PNG"/>');
			}				
			else if(x > 9 || x < 12) {
				$(".play").append('<img src = "IRightSplit31Fake24Cross.PNG"/>');
			}	
			else if(x > 12 || x < 15) {
				$(".play").append('<img src = "Shotgun860_861.PNG"/>');
			}
			else if(x > 15 || x < 18) {
				$(".play").append('<img src = "ShotgunBlue897GunPass.PNG"/>');
			}
			else if(x > 18 || x < 21) {
				$(".play").append('<img src = "ShotgunRed896Run.PNG"/>');
			}		
			else if(x > 21|| x < 24) {
				$(".play").append('<img src = "ShotgunRed898GunPass.PNG"/>');
			}	
			else if(x > 24 || x < 27) {
				$(".play").append('<img src = "TFormLeftFlankerPass.PNG"/>');
			}
			else if(x > 27 || x < 30) {
				$(".play").append('<img src = "TFormLeftPitchTEReverse.PNG"/>');
			}
			else if(x > 30 || x < 33) {
				$(".play").append('<img src = "TFormRightFakeBootPass.PNG"/>');
			}	
			else if(x > 33 || x < 36) {
				$(".play").append('<img src = "TFormRightFakePitch.PNG"/>');
			}	
			else if(x > 36 || x < 39) {
				$(".play").append('<img src = "Wing121Jet.PNG"/>');
			}
			else if(x > 39 || x < 42) {
				$(".play").append('<img src = "Wing121Toss.PNG"/>');
			}
			else if(x > 42 || x < 45) {
				$(".play").append('<img src = "Wing182Counter.PNG"/>');
			}	
			else if(x > 45 || x < 48) {
				$(".play").append('<img src = "WingWedge144CTXXDive.PNG"/>');
			}	
			else if(x > 48 || x < 51) {
				$(".play").append('<img src = "HailMary.PNG"/>');
			}
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
