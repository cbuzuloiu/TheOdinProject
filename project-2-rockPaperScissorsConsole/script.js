`use strict`;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  const computerChoice = ["rock", "paper", "scissors"];

  return computerChoice[random];
}

function playRound(choice) {
  const humanChoice = choice;
  const computerChoice = getComputerChoice();

  const humanChoiceSelect = document.querySelector(".human-choice");
  const computerChoiceSelect = document.querySelector(".computer-choice");
  const winner = document.querySelector(".winner");

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

// --- CLI INTERACTION ---

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
});
