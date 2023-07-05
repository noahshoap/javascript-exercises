const sumAll = function(start, end) {
  let min, max

  if (typeof (start) != "number" || typeof (end) != "number" || start < 0 || end < 0)
    return `ERROR`

  if (start < end) {
    min = start
    max = end
  } else {
    min = end
    max = start
  }

  let rv = min

  for (let i = rv + 1; i <= max; ++i) {
    rv += i
  }

  return rv
};

// Do not edit below this line
module.exports = sumAll;
