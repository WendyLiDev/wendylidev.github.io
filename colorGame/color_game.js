// ===================== HELPER FUNCTIONS =====================

// Returns a random string in the form "rgb(xx, xx, xx)"
function randomColorGenerator(){
	var str = "rgb(" + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")";
	return str;
}

// Returns an array of random strings in the form "rgb(xx, xx, xx)"
function arrRandomColors(numColors){
	var colorArray = [];
	for(var i = 0; i < numColors; i++){
		colorArray.push(randomColorGenerator());
	}
	return colorArray;
}

// ===================== GAME SETUP IMPLEMENTATION =====================
var initialBackgroundColor = "rgb(73, 132, 227)";
document.getElementById("header").style.background = initialBackgroundColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var numSquares = 6;
function gameSetup(){
	// Set the colors for each square, if easy, set to 3, if hard, set to 6
	colors = arrRandomColors(numSquares);

	// Randomly select the color to guess
	var rgbText = document.getElementById("color-to-guess");
	var colorToGuess = colors[Math.floor(Math.random() * (colors.length))]
	rgbText.innerHTML = colorToGuess;

	// Set color & Add event listener to each square
	for(var i = 0; i < squares.length; i++){
		// Set the color of each square
		squares[i].style.background = colors[i];
		squares[i].style.opacity = "1.0";

		// Add event listener to each square
		squares[i].addEventListener("click", function(){
			// Set clickedColor to the color value of the clicked on square
			var clickedColor = this.style.background;
			if(colorToGuess === clickedColor){
				for(var j = 0; j < squares.length; j++){
					// squares[j].style.visibility = "block";
					squares[j].style.opacity = "1.0";
					squares[j].style.background = clickedColor;
					document.getElementById("header").style.background = clickedColor;
					document.getElementById("game-status").innerHTML = "Correct!";
					document.getElementById("reset-button").innerHTML = "Play Again?"
				}
			}
			else{	
				document.getElementById("game-status").innerHTML = "Try Again";
				// this.style.visibility = "hidden";
				this.style.opacity = "0.0";
			}
		});
	}
}

// ===================== GAME RESET BUTTONS =====================
var resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click",function(){
	// Generate new colors & Set the colors for each square
	gameSetup();
	// Clear game-status
	document.getElementById("game-status").innerHTML = "";
	// // Reset background color
	document.getElementById("header").style.background = initialBackgroundColor;
});

// ===================== EASY AND HARD TOGGLE BUTTONS =====================
var modeButtons = document.querySelectorAll(".mode");
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		for(var j = 0; j < modeButtons.length; j++){
			modeButtons[j].classList.remove("selected");
		}
		this.classList.add("selected");
		var allSquares = document.querySelectorAll(".square");
		if(this.textContent === "Easy"){
			allSquares[3].style.display="none";
			allSquares[4].style.display="none";
			allSquares[5].style.display="none";
			numSquares = 3;
		}
		else if(this.textContent === "Hard"){
			allSquares[3].style.display="block";
			allSquares[4].style.display="block";
			allSquares[5].style.display="block";
			numSquares = 6;
		}
		else{ // Set the default to hard
			numSquares = 6;
		}
		gameSetup();
	});
}

// ===================== CALL GAME SETUP =====================
gameSetup();











