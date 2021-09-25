const number = prompt("Enter number");
console. log("Number", number);
const sixthNumber = number % 100000 % 10000 % 1000 % 100 % 10;
const fifthNumber = (number % 100000 % 10000 % 1000 % 100 - sixthNumber) / 10;
const fourthNumber = (number % 100000 % 10000 % 1000 - sixthNumber - fifthNumber * 10) / 100;
const fifthNumber1 = fifthNumber * 10;
const thirdNumber = (number % 100000 % 10000 - sixthNumber - fifthNumber1 - fourthNumber * 100) / 1000;
const fourthNumber1 = fourthNumber * 100;
const secondNumber = (number % 100000 - sixthNumber - fifthNumber1 - fourthNumber1 - thirdNumber * 1000) / 10000;
const thirdNumber1 = thirdNumber * 1000;
const secondNumber1 = secondNumber * 10000;
const firstNumber = (number - sixthNumber - fifthNumber1 - fourthNumber1 - thirdNumber1 - secondNumber1) / 100000;
console. log("First number", firstNumber);
console. log("Second number", secondNumber);
console. log("Third number", thirdNumber);
console. log("Fourth number", fourthNumber);
console. log("Fifth number", fifthNumber);
console. log("Sixth number", sixthNumber);
if(firstNumber == sixthNumber &&  secondNumber == fifthNumber && thirdNumber == fourthNumber) {    
    alert(`${number} Mirror number`);
}
    else {        
        alert(`${number} Not mirror number`);
    }