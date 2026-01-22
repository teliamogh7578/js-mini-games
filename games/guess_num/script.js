"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔No number!";
  } else if (secretNumber === guess) {
    document.querySelector(".message").textContent = "🥳Correct number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (secretNumber < guess) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "📈Too high!";
    } else {
      document.querySelector(".message").textContent = "💥You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
