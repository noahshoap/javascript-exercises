const repeatString = function(string, num) {
  let rv = ''

  if (num < 0)
    return 'ERROR'

  for (let i = 0; i < num; ++i) {
    rv = `${rv}${string}`
  }

  return rv
};

// Do not edit below this line
module.exports = repeatString;
