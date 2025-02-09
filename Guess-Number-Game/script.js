"use strict";

let randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = randomNumber();
// console.log(secretNumber);

let Score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const correctTheme = function () {
  document.querySelector("body").style.backgroundColor = "#6EB359C8";
  document.querySelector(".number").style.width = "30rem";
};
const duringGuessingTheme = function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);// console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage("no number");
  }
  //when player wins
  else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage("Correct Number!");
    correctTheme();

    if (Score > highScore) {
      highScore = Score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //when guess is wrong
  else if (guess !== secretNumber) {
    if (Score > 1) {
      displayMessage(
        guess > secretNumber ? "Number is too high !" : "Number is too Low!"
      );
      Score--;
      displayScore(Score);
    } else {
      displayMessage("You Lost the Game  :(");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  Score = 20;
  secretNumber = randomNumber();// console.log(secretNumber);
  displayMessage("Start guessing...");
  displayScore(Score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  duringGuessingTheme();
});
