const choises = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const score = document.getElementById("score");

let playerCounter = 0;
let computerCounter = 0;

function playGame(player) {
  const computer = choises[Math.floor(Math.random() * 3)];

  let result = "";

  if (player === computer) {
    result = "IT'S A TIE";
  } else {
    switch (player) {
      case "rock":
        result = computer === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;

      case "paper":
        result = computer === "rock" ? "YOU WIN" : "YOU LOSE";
        break;

      case "scissors":
        result = computer === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }
  playerChoice.innerHTML = `PLAYER: ${player}`;
  computerChoice.innerHTML = `COMPUTER: ${computer}`;
  resultDisplay.innerHTML = result;

  resultDisplay.classList.remove("green", "red");

  switch (result) {
    case "YOU WIN":
      resultDisplay.classList.add("green");
      playerCounter++;
      playerScore.innerHTML = playerCounter;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("red");
      computerCounter++;
      computerScore.innerHTML = computerCounter;
      break;
  }
  playerScore.innerHTML = `PLAYER SCORE: ${playerCounter}`;
  computerScore.innerHTML = `COMPUTER SCORE: ${computerCounter}`;

  score.innerHTML = `SCORE: ${playerCounter + computerCounter}`;
}
