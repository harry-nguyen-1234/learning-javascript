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

function lastLetter(string) {
    strLength = string.length;
    return string[strLength - 1];
}

// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number
function fizzBuzz() {
    let endNum = parseInt(prompt("Enter the ending number: "));
    let valueStrPairs = [[3, "Fizz"], [5, "Buzz"]];
    for (let i = 1; i <= endNum; i++) {
        let outputString = i.toString() + " "; 
        for (let j = 0; j < valueStrPairs.length; j++) {
            if (i % valueStrPairs[j][0] == 0) {
                outputString += valueStrPairs[j][1];
            }
        }
        console.log(outputString);
    }
}