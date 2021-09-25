const numbers = prompt (`Enter numbers separated by space`);
const massNumbers = numbers;
console.log(massNumbers.split(' '));
const arr = massNumbers.split(' ');
let arrNumber = arr.filter(item=Number);
console.log(arrNumber);

const action = prompt("Enter action  + , - , *, /");
console.log(`Action`, action);
let result = arrNumber.reduce(function(a,b) {
if(action === '*'){
    return a * b;
} else if(action === '+'){
    return parseInt(a) + parseInt(b);
} else if(action === '-'){
    return a - b;
} else if(action === '/'){
    return a / b;
} else {
    console.log('Wrong action!');        
}
});
console.log(`Calculation result`, result);
