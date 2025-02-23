function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;

  // Edit between these lines
  // =================================
  result = a + b;

  // =================================

  return result;
}

console.log(troubleshooting());

let number = Number(prompt("enter a number"));

function numberChecker() {
  if (number === 6) {
    return true;
  } else {
    return false;
  }
}

numberChecker();
