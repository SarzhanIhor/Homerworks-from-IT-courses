const number = prompt("Enter number");
console. log("Number", number);
const secondNumber = number % 10;
const firstNumber = (number - secondNumber) / 10;
console. log("First number", firstNumber);
console. log("Second number", secondNumber);
if (firstNumber > secondNumber) {
    console. log(`${firstNumber} more than ${secondNumber}`)
}
else if (firstNumber < secondNumber) {
    console. log(`${firstNumber} less than ${secondNumber}`)
}
else {
    console. log(`${firstNumber} equal ${secondNumber}`)
}


