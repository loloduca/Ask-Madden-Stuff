$(document).ready(function(){
	$(".reset").hide();
});

var check1 = true;
var check2 = true;

$(".ask").click(function() {
	var x = Math.floor((Math.random() * 100) + 1);

	if($(".question").val() == false && check1 == true) {
		$(".fail").append('<p>You need to ask Madden.</p>');
		check1 = false;
	}else if($(".question").val() != false && check2 == true){
		$(".welcome").hide();
		$(".fail").remove();
		$(".play").append('<p>This is your play!</p>');

		//DEFENSE
		if($(".question").val().search("married") || $(".question").val().search("marry")
			 || $(".question").val().search("marriage") || $(".question").val().search("finance") ||
			 $(".question").val().search("money") || $(".question").val().search("cash") || 
			 $(".question").val().search("family") || $(".question").val().search("mafia") || 
			 $(".question").val().search("kill") || $(".question").val().search("murder") || 
			 $(".question").val().search("fight") || $(".question").val().search("choke") || 
			 $(".question").val().search("attack") || $(".question").val().search("gun") || 
			 $(".question").val().search("knife") != -1) {
			if(x > 0 && x < 5) {
				$(".play").append('<img src = "ILeft37Pwr.PNG"/>');
			}
			else if(x > 10 && x < 15) {
				$(".play").append('<img src = "IRight24FakeGoPass.PNG"/>');
			}
			else if(x > 15 && x < 20) {
				$(".play").append('<img src = "IRight33Dive.PNG"/>');
			}
			else if(x > 20 && x < 25) {
				$(".play").append('<img src = "IRightSplit31Fake24Cross.PNG"/>');
			}
			else if(x > 25 && x < 30) {
				$(".play").append('<img src = "Shotgun860_861.PNG"/>');
			}
			else if(x > 30 && x < 35) {
				$(".play").append('<img src = "ShotgunBlue897GunPass.PNG"/>');
			}
			else if(x > 35 && x < 40) {
				$(".play").append('<img src = "ShotgunRed896Run.PNG"/>');
			}
			else if(x > 40 && x < 45) {
				$(".play").append('<img src = "ShotgunRed898GunPass.PNG"/>');
			}
			else if(x > 45 && x < 50) {
				$(".play").append('<img src = "TFormLeftFlankerPass.PNG"/>');
			}
			else if(x > 50 && x < 55) {
				$(".play").append('<img src = "TFormLeftPitchTEReverse.PNG"/>');
			}
			else if(x > 55 && x < 60) {
				$(".play").append('<img src = "TFormRightFakeBootPass.PNG"/>');
			}
			else if(x > 60 && x < 65) {
				$(".play").append('<img src = "TFormRightFakePitch.PNG"/>');
			}
			else if(x > 65 && x < 70) {
				$(".play").append('<img src = "Wing121Jet.PNG"/>');
			}
			else if(x > 70 && x < 75) {
				$(".play").append('<img src = "Wing121Toss.PNG"/>');
			}
			else if(x > 75 && x < 80) {
				$(".play").append('<img src = "Wing182Counter.PNG"/>');
			}
			else if(x > 80 && x < 85) {
				$(".play").append('<img src = "WingWedge144CTXXDive.PNG"/>');
			}
		}

		//OFFENSE
		else if($(".question").val().search("mother") || $(".question").val().search("father") || 
			$(".question").val().search("wife") || $(".question").val().search("husband") ||
			$(".question").val().search("child") || $(".question").val().search("children") || 
			$(".question").val().search("son") || $(".question").val().search("daughter") || 
			$(".question").val().search("grandmother") || $(".question").val().search("grandma") ||
			$(".question").val().search("grandfather") || $(".question").val().search("cousin") || 
			$(".question").val().search("niece") || $(".question").val().search("nephew") || 
			$(".question").val().search("love") || $(".question").val().search("crush") || 
			$(".question").val().search("boyfriend") || $(".question").val().search("girlfriend") || 
			$(".question").val().search("fiancee") || $(".question").val().search("car") || 
			$(".question").val().search("house") != -1) {
			if(x > 0 && x < 25) {
				$(".play").append('<img src = "34OddMarlinExchange.PNG"/>');
			}
			else if(x > 25 && x < 50) {
				$(".play").append('<img src = "34QueensDeep.PNG"/>');
			}
			else if(x > 50 && x < 75) {
				$(".play").append('<img src = "34SHT_Pinch.PNG"/>');
			}
			else if(x > 75 && x < 100) {
				$(".play").append('<img src = "34UnderPirate.PNG"/>');
			}
		} else $(".play").append('<img src = "HailMary.png"/>');

		check2 = false;
		$(".reset").show();
		$(".question").hide();
		$(".ask").hide();
	}
})

$(".reset").click(function(){
	location.reload();
});
