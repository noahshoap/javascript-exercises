const convertToCelsius = function(temp) {
  let rv = temp - 32

  rv *= (5 / 9)

  rv = Math.round(rv * 10) / 10

  return rv
};

const convertToFahrenheit = function(temp) {
  let rv = temp

  rv *= (9 / 5)
  rv = Math.round(rv * 10) / 10
  rv += 32

  return rv
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
