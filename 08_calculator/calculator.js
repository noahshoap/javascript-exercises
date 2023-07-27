const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const summation = arr.reduce( (total, item) => {
        return total + item;
    }, 0);
    return summation;
};

const multiply = function(a, b) {
    const rv = Array.from(arguments)
                    .reduce( (total, el) => {
                        return total *= el;
                    }, 1);
    
    return rv;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let rv = 1;

    for (let i = 1; i <= a; i++) {
        rv *= i;
    }

    return rv;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
