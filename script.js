"use strict";

let randomNumber;
let highScore = 0;
let score;

const userInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const bodyEl = document.querySelector("body");
const numberBox = document.querySelector(".number");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  messageEl.textContent = "Start guessing...";
  numberBox.textContent = "?";
  numberBox.style.width = "15rem";
  bodyEl.style.backgroundColor = "#222";
  score = 20;
  scoreEl.textContent = score;
}
initializeGame();

checkBtn.addEventListener("click", () => {
  const guess = Number(userInput.value);
  if (!guess) {
    messageEl.textContent = "⛔️ No number!";
  } else if (randomNumber === guess) {
    bodyEl.style.backgroundColor = "#60b347";
    numberBox.textContent = randomNumber;
    numberBox.style.width = "30rem";
    messageEl.textContent = "🎉 Correct Number!";
    scoreEl.textContent = score;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else {
    if (score > 1) {
      messageEl.textContent =
        randomNumber > guess ? "📉 Too low!" : "📈 Too high!";
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "💥 You lost the game!";
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", () => {
  initializeGame();
});
