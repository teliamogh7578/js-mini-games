"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
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
    document.querySelector(".check").disabled = true;
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess < secretNumber ? "📉Too low!" : "📈Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").disabled = true;
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
  document.querySelector(".check").disabled = false;
});
// Modal functionality
const closeModal = function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};
const openModal = function () {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
};
document.querySelector(".howtoplay").addEventListener("click", openModal);
document.querySelector(".close-modal").addEventListener("click", closeModal);
document.querySelector(".overlay").addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (
    e.key === "Escape" &&
    !document.querySelector(".modal").classList.contains("hidden")
  ) {
    closeModal();
  } else if (e.key === "Enter" && !document.querySelector(".check").disabled) {
    document.querySelector(".check").click();
  }
});
