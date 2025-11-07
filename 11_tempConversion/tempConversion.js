//fahrenheit = celsius * 1.8 + 32
const convertToCelsius = function(fah) {
  const result = (fah - 32) / 1.8
  return Number.isInteger(result) ? result : Number(result.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  const result = cel * 1.8 + 32
  return Number.isInteger(result) ? result : Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
