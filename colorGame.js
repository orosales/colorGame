/*var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]*/

var numSquares = 6;
var colors =  generateRandomColor( numSquares );
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
/*var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");*/
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();

	})
};

function reset() {
	//generate random Colors
	colors =  generateRandomColor(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	// change colorDisplay to match the picked Color 
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent ="";
	for(var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

/*easyBtn.addEventListener("click", function() {
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;i

	for(var i=0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;i

	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}
});
*/
resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = pickedColor;

for (var i=0; i<colors.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to the squares
	squares[i].addEventListener("click", function() {
		var clickColor = this.style.backgroundColor;
		if (clickColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColor(clickColor);
			h1.style.backgroundColor = clickColor;
		}else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColor(color) {
//loop through all squares
	for(var i=0; i<squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}

}

function pickColor() {
	var random = Math.floor( Math.random()*colors.length );
	return colors[random];
}

function generateRandomColor(num) {
	//make an array
	var arr = [];
	//add num random colors to the array
	for (var i= 0; i < num; i++ ) {
		//get random color and push into the array
		arr.push( randomColor() );
	}
	//return the array
	return arr;
}

function randomColor() {
	// pick "red" from 0 to 255
	var r = Math.floor( Math.random()*256);
	// pick "green" from 0 to 255
	var g = Math.floor( Math.random()*256);
	//pik "blue" from 0 to 255
	var b = Math.floor( Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")"
}