`use strict`;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  const computerChoice = ["rock", "paper", "scissors"];

  return computerChoice[random];
}

function getHumanChoice() {
  let choice = prompt(
    `Please choose "rock", "paper" or "scissors"`
  ).toLowerCase();
  let isTrue = false;

  while (isTrue === false) {
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      isTrue = true;
      return choice;
    } else {
      choice = prompt(
        `Please choose "rock", "paper" or "scissors"`
      ).toLowerCase;
    }
  }

  return choice;
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(`The human choice is = ${humanChoice}`);
  console.log(`The computer choice is = ${computerChoice}`);

  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Human Wins!");
    return "Human";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Human Wins!");
    return "Human";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Human Wins!");
    return "Human";
  } else if (humanChoice === computerChoice) {
    console.log("DRAW!");
    return "Draw";
  } else {
    console.log("Computer Wins!");
    return "Computer";
  }
}

function playGame(value) {
  let humanScore = 0;
  let computerScore = 0;
  let counter = value;
  console.log(
    `In the beggining ther was nothing!\nThe machine is raging against us!\nHUMAN SCORE: ${humanScore} VS THE MACHINE: ${computerScore}`
  );

  while (counter > 0) {
    console.log(`Rounds left: ${counter}`);
    let winner = playRound();

    if (winner === "Human") {
      humanScore++;
    } else if (winner === "Computer") {
      computerScore++;
    }

    console.log(`HUMAN SCORE: ${humanScore} VS THE MACHINE: ${computerScore}`);
    counter--;
  }

  if (humanScore > computerScore) {
    console.log(`Humans Win!`);
  } else if (humanScore < computerScore) {
    console.log(`Machines win!`);
  } else {
    console.log(`It was a Draw!`);
  }
}

let value = Number(
  prompt(`Please tell us the number of rounds you want to play`)
);

playGame(value);
