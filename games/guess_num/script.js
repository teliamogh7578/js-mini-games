"use strict";
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

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
