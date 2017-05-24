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
		alert("0 < X Coordinate < 10");
	}
	else if(yCoord > 6){
		alert("0 < X Coordinate < 6");
	}else{
		//voy a guardar el tablero en el div "lyft-game"
		var lyftGame = document.getElementsByClassName("lyft-game");
		var contBoard = document.createElement("div");
		contBoard.setAttribute("id","board");
		lyftGame.appendChild(contBoard);

		//board
		var board = [
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0],
		  [0,0,0,0,0,0,0,0,0,0]
		];

		var divBoard = document.getElementById("board");
		var row, column;

		for(var i = 0; i < board.length; i++){
			row = document.createElement("div");
			row.classList.add("row");
			for(var j = 0; j < board[i].length; j++){
				column = document.createElement("div");
				column.innerHTML = board[i][j];
				column.classList.add("column");
				row.appendChild(column);
			}
			divBoard.appendChild(row);
			contBoard.appendChild(divBoard);
		}
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

//Play Lyft
function Auto(posicion_x, posicion_y){
	this.posicion_x = posicion_x;
	this.posicion_y = posicion_y;

	this.avanzar = function(){
		this.posicion_y = this.posicion_y + 1;
	};
	this.ir_izquierda = function(){
		this.posicion_x = this.posicion_x - 1;
	};
	this.ir_derecha = function(){
		this.posicion_x = this.posicion_x + 1;
	};
	this.retroceder = function(){
		this.posicion_y = this.posicion_y - 1;
	}
}


