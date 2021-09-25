const number = prompt("Enter number");
console. log("Number", number);
const thirdNumber = number % 10;
const secondNumber = (number % 100 - thirdNumber) / 10;
const firstNumber = (number % 1000 - thirdNumber - secondNumber * 10) / 100;
console. log("First number", firstNumber);
console. log("Second number", secondNumber);
console. log("Third number", thirdNumber);
if((firstNumber + secondNumber + thirdNumber) % 2 == 0) {    
    alert(`The sum of numbers is even`);
}
    else {        
        alert(`The sum of numbers is not even`);
    }
if((firstNumber + secondNumber + thirdNumber) % 5 == 0) {    
    alert(`Sum of numbers is divisible by 5`);
}
    else {        
        alert(`Sum of numbers is not divisible by 5`);
    }    
if((firstNumber * secondNumber * thirdNumber) > 100) {    
    alert(`Multiplication of numbers greater than 100`);
}
    else {        
        alert(`Multiplication of numbers less than 100`);
    }        