function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// Return the string with only first letter capitalised
function capitalise(string) {
    firstLetter = string[0].toUpperCase();
    subString = string.toLowerCase();
    return firstLetter + subString.slice(1);
}

// Return the last letter of the string.
function lastLetter(string) {
    strLength = string.length;
    return string[strLength - 1];
}

console.log(add7(1));
console.log(multiply(2,3));
console.log(capitalise("TEST"));
console.log(lastLetter("test"));