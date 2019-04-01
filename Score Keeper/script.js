var p1Button = document.querySelector(".p1")
var p2Button = document.querySelector(".p2")

var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")

var resetButton = document.querySelector("#reset")

var inputNum = document.querySelector("input")
var winningScoreDisplay = document.querySelector("p span")

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5 //document.querySelector

/**Allows the "Player One" button the ability to increment it's score, and when
 * when this player's score equals the winning score its font changes to green
 * and the ability to continue incrementing either player's score ceases. */
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner")
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

/**Allows the "Player Two" button the ability to increment it's score, and when
 * when this player's score equals the winning score its font changes to green
 * and the ability to continue incrementing either player's score ceases. */
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner")
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})


/**Adds a click event listener to the reset button by calling the reset() inside
 * of it. Look ahead for the description of reset().
*/
resetButton.addEventListener("click", function(){
    reset();
})

/** reset() resets both player counts to 0, removes the winner class from either
 *  winning player so the color of the font goes back to black and changes
 * the gameOver variable to false to reenable the scoring functionality at the
 * start of a new game.
 */
function reset(){
    p1Display.textContent = 0;
    p1Display.classList.remove("winner")

    p2Display.textContent = 0;
    p2Display.classList.remove("winner")

    p1Score = 0;
    p2Score = 0;

    gameOver = false;
}

/* Gives functionality to the number input form. When a number is selected 
/* to be the new end of the game it updates "Playing to: # " and then calls
/* reset function to restart the entire game and set the new game to the new
/* number.*/
inputNum.addEventListener("change", function(){
    winningScoreDisplay.textContent = inputNum.value;
    winningScore = Number(inputNum.value)
    reset();
})