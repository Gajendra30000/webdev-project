const userScoreEl = document.getElementById("userscore");
const compScoreEl = document.getElementById("compscore");
const resultEl = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));

function play(userChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === compChoice) {
    result = "It's a draw! 😐";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    result = `You win! 🎉 ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    result = `You lose! 😢 ${compChoice} beats ${userChoice}`;
  }

  resultEl.innerHTML = result;
  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;
}
