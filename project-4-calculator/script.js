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

console.log(operate(1, "+", 1));
console.log(operate(1, "-", 1));
console.log(operate(2, "*", 2));
console.log(operate(4, "/", 2));
