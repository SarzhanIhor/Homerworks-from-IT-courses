const number = prompt("Enter number");
console. log("Number", number);
const thirdNumber = number % 10;
const secondNumber = (number % 100 - thirdNumber) / 10;
const firstNumber = (number % 1000 - thirdNumber - secondNumber * 10) / 100;
console. log("First number", firstNumber);
console. log("Second number", secondNumber);
console. log("Third number", thirdNumber);
if(firstNumber == secondNumber &&  firstNumber == thirdNumber) {    
    alert(`Numbers are equal`);
}
    else {        
        alert(`Numbers are not equal`);
    }
if(firstNumber == secondNumber) {    
    alert(`First number and Second number equal`);
}
if(firstNumber == thirdNumber) {    
    alert(`First number and Third number equal`);
} 
if(secondNumber == thirdNumber) {    
    alert(`Second number and Third number equal`);
}   
      