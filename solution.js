$(document).ready(function(){
	$(".reset").hide();
});

var check1 = true;
var check2 = true;

// function checkDef() {
// 	var def = ["married", "marry", "marriage", "finance", "money", "cash",
// 			"family", "mafia", "kill", "murder", "fight", "choke",
// 			"attack", "gun", "knife"];
// 	for(int i = 0; i < def.length() i++) {

// 	}
// }

// function checkOff() {
// 	var off = ["mother", "father", "wife", "husband", "child", "children",
// 			"son", "daughter", "grandmother", "grandma", "grandfather",
// 			"cousin", "niece", "nephew", "love", "crush", "boyfriend",
// 			"girlfriend". "fiancee"];
// }

$(".ask").click(function() {
	var x = Math.floor((Math.random() * 100) + 1);
	console.log(x);

	if($(".question").val() == false && check1 == true) {
		$(".fail").append('<p>You need to ask Madden.</p>');
		check1 = false;
	}else if($(".question").val() != false && check2 == true){
		$(".welcome").hide();
		$(".fail").remove();
		$(".play").append('<p>This is your play!</p>');
		
		if($(".question").val().search('alpha') != -1) { //DEFENSE
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
		}

		if($(".question").val().search('beta') != -1) { //OFFENSE
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
			else if(x > 85 && x < 100) {
				$(".play").append('<img src = "HailMary.png"/>');
			}
		}

		check2 = false;
		$(".reset").show();
		$(".question").hide();
		$(".ask").hide();
	}
})

$(".reset").click(function(){
	location.reload();
});
