`use strict`;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  const computerChoice = ["rock", "paper", "scissors"];

  return computerChoice[random];
}

function playRound(choice) {
  const humanChoice = choice;
  const computerChoice = getComputerChoice();

  humanChoiceSelect.textContent = humanChoice.toUpperCase();
  computerChoiceSelect.textContent = computerChoice.toUpperCase();

  if (humanChoice === "scissors" && computerChoice === "paper") {
    winner.textContent = "HUMAN";
    return "Human";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    winner.textContent = "HUMAN";
    return "Human";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    winner.textContent = "HUMAN";
    return "Human";
  } else if (humanChoice === computerChoice) {
    winner.textContent = "DRAW";
    return "Draw";
  } else {
    winner.textContent = "COMPUTER";
    return "Computer";
  }
}

function playGame(choice) {
  let winner = playRound(choice);

  if (winner === "Human") {
    humanScore++;
    textHumanScore.textContent = humanScore;
  } else if (winner === "Computer") {
    computerScore++;
    textComputerScore.textContent = computerScore;
  }
}

function finalWinner(humanScore, computerScore) {
  const container = document.querySelector(".container");
  const div = document.createElement("div");

  div.setAttribute("class", "final-winner");

  container.appendChild(div);

  const p = document.createElement("p");
  const contentOfFinalWinner = document.querySelector(".final-winner");

  contentOfFinalWinner.appendChild(p);

  let win = "";

  if (humanScore > computerScore) {
    win = "Human";
  } else if (humanScore < computerScore) {
    win = "Computer";
  } else {
    win = "No Winner";
  }
  document.querySelector(".final-winner > p").textContent = `Winner is: ${win}`;
}

// --- CLI INTERACTION ---
const humanChoiceSelect = document.querySelector(".human-choice");
const computerChoiceSelect = document.querySelector(".computer-choice");
const winner = document.querySelector(".winner");
const numberOfRounds = document.querySelector("input");
const numberOfRoundsText = document.querySelector(".nr-of-rounds");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const textHumanScore = document.querySelector(".human-score");
const textComputerScore = document.querySelector(".computer-score");
const btnOk = document.querySelector(".number-of-rounds");
const btnRstart = document.querySelector(".restart");

let humanScore = 0;
let computerScore = 0;
let round = 0;
let gameStart = false;

btnRstart.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  gameStart = false;
  btnOk.disabled = false;

  numberOfRoundsText.textContent = "__";
  textHumanScore.textContent = "__";
  textComputerScore.textContent = "__";
  humanChoiceSelect.textContent = "__";
  computerChoiceSelect.textContent = "__";
  winner.textContent = "__";

  document.querySelector(".final-winner").remove();
});

btnOk.addEventListener("click", () => {
  round = Number(numberOfRounds.value);
  if (round <= 0) {
    alert("Please select a number greater than 0");
    numberOfRounds.value = "";
  } else {
    numberOfRounds.value = "";
    numberOfRoundsText.textContent = round;
    gameStart = true;
    btnOk.disabled = true;
  }
});

btnRock.addEventListener("click", () => {
  if (gameStart === false) {
    alert(
      "Please start the game by specifying the number of rounds you want to play and press OK"
    );
  } else if (round <= 0) {
    alert("Please press restart to restart the game");
  } else {
    let choice = btnRock.textContent.toLocaleLowerCase();
    playGame(choice);
    round--;
    numberOfRoundsText.textContent = round;
  }

  if (round === 0 && gameStart === true) {
    finalWinner(humanScore, computerScore);
  }
});

btnPaper.addEventListener("click", () => {
  if (gameStart === false) {
    alert(
      "Please start the game by specifying the number of rounds you want to play and press OK"
    );
  } else if (round <= 0) {
    alert("Please press restart to restart the game");
  } else {
    let choice = btnPaper.textContent.toLocaleLowerCase();
    playGame(choice);
    round--;
    numberOfRoundsText.textContent = round;
  }

  if (round === 0 && gameStart === true) {
    finalWinner(humanScore, computerScore);
  }
});

btnScissors.addEventListener("click", () => {
  if (gameStart === false) {
    alert(
      "Please start the game by specifying the number of rounds you want to play and press OK"
    );
  } else if (round <= 0) {
    alert("Please press restart to restart the game");
  } else {
    let choice = btnScissors.textContent.toLocaleLowerCase();
    playGame(choice);
    round--;
    numberOfRoundsText.textContent = round;
  }

  if (round === 0 && gameStart === true) {
    finalWinner(humanScore, computerScore);
  }
});
