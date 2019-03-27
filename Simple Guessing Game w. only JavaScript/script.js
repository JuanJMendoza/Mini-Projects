//create sectet number;
var secretNum = 4;
//ask user for guess;
//var guess = guessingGame(prompt("Guess a number"));

function guessingGame(guess) {
  //check if guess is right;
  if (guess === secretNum) {
    alert("You got it! Play again!");
    guessingGame(Number(prompt("Guess a number")));
  }
  //check if guess is too high
  else if (guess > secretNum) {
    alert("Too high, guess again.");
    guessingGame(Number(prompt("Guess a number")));
  }
  //check if guess is too low
  else if (guess < secretNum) {
    alert("Too low, guess again.");
    guessingGame(Number(prompt("Guess a number")));
  } else {
    alert("Wrong. Try again.");
    guessingGame(Number(prompt("Guess a number")));
  }
}

guessingGame(Number(prompt("Guess a number")));
