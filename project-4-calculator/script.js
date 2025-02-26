"use strict";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operand1, operator, operand2) {
  if (operator === "+") {
    return add(operand1, operand2);
  }

  if (operator === "-") {
    return subtract(operand1, operand2);
  }

  if (operator === "*") {
    return multiply(operand1, operand2);
  }

  if (operator === "/") {
    return divide(operand1, operand2);
  }
}

let operand1;
let operator;
let operand2;

let operand = "";
let secondScreenContent = "";
let operations = [];

const btnDigit = document.querySelectorAll(".digit");
const btnOperations = document.querySelectorAll(".operations");
const btnEqual = document.querySelector(".equal");
const mainScreen = document.querySelector(".container-2");
const secondScreen = document.querySelector(".container-1");

// mainScreen.textContent = operand;

btnDigit.forEach((element) => {
  element.addEventListener("click", () => {
    const content = element.textContent;
    operand += content;
    mainScreen.textContent = operand;
    secondScreenContent += content;
  });
});

btnOperations.forEach((element) => {
  element.addEventListener("click", () => {
    operations.push(Number(operand));
    console.log(operations);
    const content = element.textContent;
    operations.push(content);
    console.log(operations);
    secondScreenContent += ` ${content} `;
    secondScreen.textContent = secondScreenContent;
    operand = " ";
  });
});

btnEqual.addEventListener("click", () => {
  operations.push(Number(operand));
  secondScreen.textContent = secondScreenContent;
  console.log(operations);

  if (operations[1] === "+") {
    let result = add(operations[0], operations[2]);
    mainScreen.textContent = result;
    operations = [];
    operand = result;
    secondScreen.textContent = result;
    secondScreenContent = result;
    console.log(operations);
  }

  if (operations[1] === "-") {
    let result = subtract(operations[0], operations[2]);
    mainScreen.textContent = result;
    operations = [];
    operand = result;
    secondScreen.textContent = result;
    secondScreenContent = result;
    console.log(operations);
  }

  if (operations[1] === "X") {
    let result = multiply(operations[0], operations[2]);
    mainScreen.textContent = result;
    operations = [];
    operand = result;
    secondScreen.textContent = result;
    secondScreenContent = result;
    console.log(operations);
  }

  if (operations[1] === "/") {
    let result = divide(operations[0], operations[2]);
    mainScreen.textContent = result;
    operations = [];
    operand = result;
    secondScreen.textContent = result;
    secondScreenContent = result;
    console.log(operations);
  }
});

// btn.addEventListener("click", () => {
//   alert("click");
// });
