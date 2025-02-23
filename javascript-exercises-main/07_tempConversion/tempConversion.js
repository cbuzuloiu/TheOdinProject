const convertToCelsius = function (x) {
  return Math.round((x - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (y) {
  return Math.round(((y * 9) / 5 + 32) * 10) / 10;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(40.6));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
