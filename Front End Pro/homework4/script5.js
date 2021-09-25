
const number = prompt("Enter number");
let numberResult=number;
console. log("Number", number);
while (numberResult % 3 === 0) {
    numberResult /= 3;    
}
console.log((numberResult === 1)? "Number can be obtained 3 in power "+ Math.round(Math.log(number)) : "Number can not be obtained")


