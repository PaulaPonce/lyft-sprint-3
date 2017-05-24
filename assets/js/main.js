
//validate phone number
var driveBtn = document.getElementById("drive");
driveBtn.addEventListener("click", validatePhone);

function validatePhone(){
	var phone = document.getElementById("phone").value;
	if(!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(phone)){
		alert("invalid phone number");
	}
}

//validate coordinates
var playBtn = document.getElementById("play");
playBtn.addEventListener("click", validateCoord);

function validateCoord(){
	var xCoord = document.getElementById("x-coord").value;
	var yCoord = document.getElementById("y-coord").value;
	if(xCoord > 10){
		alert("X Coordinate < 10");
	}
	if(yCoord > 6){
		alert("X Coordinate < 6");
	}
}

//alert at the bottom
function showAlert(){
	window.onscroll = function(ev){
	    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	        alert("You're at the bottom of the page");
	    }
	};
}
showAlert();
