var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked = randomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

// Button Section!

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

function reset() {
	colors = generateRandomColors(numSquares);
	// pick new color from array
	colorPicked = randomColor();
	// change display color to match color picked
	colorDisplay.textContent = colorPicked
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Colors";
	// change color of squares
	for(var i = 0; i < squares.length; i++ ) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
		h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function() {
	reset();
});

// Loop dictating the gameplay!!

colorDisplay.textContent = colorPicked;

for(var i = 0; i < squares.length; i++ ) {
	// This adds the colors!
	squares[i].style.backgroundColor = colors[i];
	// now we add the clicking event
	squares[i].addEventListener("click", function() {
		// grab color of picked square
		var clickedColor = (this.style.backgroundColor);
		// compare the clicked color with the color picked
		if(clickedColor === colorPicked) {
			messageDisplay.textContent = "You're Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = colorPicked;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Nice try, but wrong";
		}
	});
}

// this function tells us how many colors to pick (how many sqaures do we have 3 or 6)

function randomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// this function generates the colors

function colorRandom() {
	// need to pick a red 
	var r = Math.floor(Math.random() * 256)
	// need to pick a green
	var g = Math.floor(Math.random() * 256)
	// need o pick a blue
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// this function generates the array and pushes each new color into the array
function generateRandomColors(num) {
	// make an array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++) {
		arr.push(colorRandom());
	}
	// retun that array
	return arr;
}

// this function changes all squares to equal the correct color when you are correct

function changeColors (color) {
	// change each color to match the correct color
	for(var i = 0; i < squares.length; i++)
		squares[i].style.backgroundColor = color;
}