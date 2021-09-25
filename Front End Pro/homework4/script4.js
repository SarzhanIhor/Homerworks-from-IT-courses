let number = prompt("Enter number");
number = parseInt(number);
if ((number % 2 === 0) && (number !== 2)) {
console.log(`${number} Not Prime number`)
}
else if (number === 1) {
    console.log(`${number} Not Prime number`) 
} 
else if (number === 2) {
console.log(`${number} Prime number`) } 
else { 
let squareRootNumber = Math.round(Math.sqrt(number));
let flag = false;             
for(let i = 2; i < squareRootNumber + 1; i++) 
    if(number % i === 0)  {
        console.log(`${number} Not Prime number`);
        flag = true;
        break; 
    }                    
    if (flag === false) {
    console.log(`${number} Prime number`);
    }
}
