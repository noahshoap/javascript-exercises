const removeFromArray = function(array, ...removeArgs) {
  let rv = []

  const removeMap = new Map();

  for (const removeEl of removeArgs) {
    removeMap.set(removeEl, 0)
  }

  for (const el of array) {
    if (removeMap.has(el) === false)
      rv.push(el)
  }

  return rv
};

// Do not edit below this line
module.exports = removeFromArray;
