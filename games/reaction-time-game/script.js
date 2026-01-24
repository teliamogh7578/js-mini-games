"use strict";

const reactionBox = document.querySelector(".reaction-box");
const reactionText = document.querySelector(".reaction-text");
const highScoreEl = document.querySelector(".highscore span");

highScoreEl.textContent = "N/A";

let startTime;
let timeoutId;
let gameState = "idle";
let highScore = null;

reactionBox.addEventListener("click", function () {
  if (gameState === "idle") {
    gameState = "waiting";
    reactionText.textContent = "Wait for green...";
    reactionBox.style.backgroundColor = "#c50000";

    const delay = Math.random() * 4000 + 1000;

    timeoutId = setTimeout(() => {
      gameState = "ready";
      reactionBox.style.backgroundColor = "#1f974b";
      reactionText.textContent = "Click!";
      startTime = Date.now();
    }, delay);
    return;
  }

  if (gameState === "waiting") {
    clearTimeout(timeoutId);
    gameState = "idle";
    reactionBox.style.backgroundColor = "#c9c61f";
    reactionText.textContent = "Too soon!";
    return;
  }

  if (gameState === "ready") {
    const reactionTime = Date.now() - startTime;
    reactionText.textContent = `${reactionTime} ms`;
    reactionBox.style.backgroundColor = "#3b82f6";
    gameState = "idle";

    if (highScore === null || reactionTime < highScore) {
      highScore = reactionTime;
      highScoreEl.textContent = highScore;
    }
  }
});
