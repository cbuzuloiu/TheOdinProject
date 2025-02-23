const sumAll = function (nr1, nr2) {
  let sum = 0;

  if (nr1 < 0 || nr2 < 0) return "ERROR";

  if (!Number.isInteger(nr1) || !Number.isInteger(nr2)) return "ERROR";

  if (nr1 > nr2) {
    for (let i = nr2; i <= nr1; i++) {
      sum += i;
    }
  } else {
    for (let i = nr1; i <= nr2; i++) {
      sum += i;
    }
  }

  return sum;
};

console.log(sumAll(2.2, 4));

// Do not edit below this line
module.exports = sumAll;
