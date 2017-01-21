function ask() {
	var x = document.getElementsByClassName("ask");
	x.style.visibility = "hidden";
	var y = document.getElementById("question").value;
	alert(y);
	// var btn = document.createElement("askagain");
}

function askAgain() {
	x.style.visibility = "visible";
}