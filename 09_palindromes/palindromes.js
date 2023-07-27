function isPunctuationOrWhitespace(char) {
    if (char === '!') {
        return true;
    } else if (char === '.') {
        return true;
    } else if (char === ',') {
        return true;
    } else if (char === ' ') {
        return true;
    }
    return false;
}

const palindromes = function (str) {
    str = str.toLowerCase();
    let strArray = str.split("");
    let noPunc = strArray.filter(char => !isPunctuationOrWhitespace(char));

    let reverseStr = noPunc.reverse().join("");
    noPunc = noPunc.reverse();
    return reverseStr === noPunc.join("");
};

// Do not edit below this line
module.exports = palindromes;
