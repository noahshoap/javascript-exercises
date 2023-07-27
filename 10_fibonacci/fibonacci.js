const fibonacci = function(num) {
    if (typeof(num) === "string") {
        num = Number(num);
    }

    if (num < 0) {
        return "OOPS";
    }

    let fib = [0, 1];

    while (fib.length <= num) {
        let x = fib[fib.length - 2];
        let y = fib[fib.length - 1];
        let z = x + y;
        fib.push(z);
    }

    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
