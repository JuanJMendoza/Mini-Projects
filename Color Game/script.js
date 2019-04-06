// The number of squares to appear on the grid.
var numSquares = 6;

/** Colors will be the array that will hold the colors each square will 
 * take at the beginning of a game. */
var colors = generateRandomColors(numSquares);

/** Squares will hold a list of all the queried "squares" on our HTML and will
 * query them via thier class name.
 */
var squares = document.querySelectorAll(".square");

/** winningColor is given a random color from the colors array and when the
 * player chooses it they win the game. */
var winningColor = randomColorfromColorArray();

// Stores what message is prompeted when player choose the wrong or right color.
var message = document.getElementById("message");

// Stores the h1 element.
var h1 = document.getElementsByTagName("h1")[0];

/** colorDisplay gets the h1 span element which changes to the winning color's
 * rgb color code. */
var colorDisplay = document.getElementById("colorDisplay");

// Stores the "New Colors" button element.
var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

// Starts the game.
init();

// Sets up the necessary components of the game.
function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

// sets up the functionality of the mode buttons Easy and Hard.
function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; ++i){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy"? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

// Sets up how many squares are displayed.
function setupSquares() {
    for(var i = 0; i < squares.length; ++i){
        /** This line will assign a color from the colors array to each 
         * square on our HTML. */
        squares[i].style.backgroundColor = colors[i];
    
        /** This line will add an eventListener to each square on our HTML to
         * trigger when they're clicked. */
        squares[i].addEventListener("click",function(){
    
            // Gives selectedColor the value of the recently clicked square.
            var selectedColor = this.style.backgroundColor;
    
            // Compares selected color to winningColor to see if they match.
            if(selectedColor === winningColor){
                message.textContent = "You Won!";
                changeAllColors(selectedColor);
                h1.style.backgroundColor = selectedColor;
                resetButton.textContent = "Play Again?"
            }else{
                message.textContent = "Try Again!";
                // Fades away the wrong choice into the background.
                this.style.backgroundColor = "#232323";
            }
        })
    }
}

// Resets the entire game.
function reset() {
    colors = generateRandomColors(numSquares);
    winningColor = randomColorfromColorArray();
    //Sets the display to the rgb color code winningColor holds.
    colorDisplay.textContent = winningColor;    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
    for(var i = 0; i < squares.length; ++i){
        /** This line will assign a color from the colors array to each 
         * square on our HTML. */
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
}

// Gives the "New Colors"/"Try Again?" button the restart functionality.
resetButton.addEventListener("click", function(){
    reset();
})

// Changes the color of all squares to color's color.
function changeAllColors(color) {
    for(var i = 0; i < squares.length; ++i){
        squares[i].style.backgroundColor = color;
    }
}

/** Choses a random index from the colors array and returns the color 
 * on that particular index. */ 
function randomColorfromColorArray(){
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum]; 
}

// Generates an array of num randomly generated colors each in in the rgb(#, #, #) format.
function generateRandomColors(num){
    // The array we'll be adding into and returning.
    var arr = [];

    for(var i = 0; i < num; ++i){
        // Will push a random color into arr.
        arr.push(randomColor());
    }    

    // Returns an array of colors in the rgb(#, #, #) format.
    return arr;
}

// Generates a random color in the rgb(#, #, #) format.
function randomColor(){
    /** Each one of these will hold a value between 0 - 255 */
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Returns an a color in the rgb(#, #, #) format.
    return "rgb(" + r + ", " + g +  ", " + b + ")";
}

// Highlights the hard button.
function hardButtonSelected(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
}

// Highlights the easy button.
function easyButtonSelected(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
}