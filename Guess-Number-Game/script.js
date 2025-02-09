"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

let Score = 20;
let highScore = 0;



document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "no number!";
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.backgroundColor = "#6EB359C8";
    document.querySelector(".number").style.width = "30rem";

    if (Score > highScore) {
      highScore = Score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (Score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Number is too high !" : "Number is too Low!";
      Score--;
      document.querySelector(".score").textContent = Score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game  :(";
      document.querySelector(".score").textContent = 0;
    }
  } 
});
// console.log(Number(document.querySelector(".score").textContent));

document.querySelector(".again").addEventListener("click", function () {
  Score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = Score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
