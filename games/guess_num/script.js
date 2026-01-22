"use strict";
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔No number!";
    console.log("ok");
  } else if (secretNumber === guess) {
    document.querySelector(".message").textContent = "🥳Correct number!";
  } else if (secretNumber > guess) {
    document.querySelector(".message").textContent = "📉Too low!";
  } else if (secretNumber < guess) {
    document.querySelector(".message").textContent = "📈Too high!";
  }
});
