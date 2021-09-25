const number = prompt("Enter number");
for(let i = 1; i <= 100; i++) {
    const squareNumber = Math.pow(i, 2); 
    if(squareNumber <= number) {
        console.log(`${i}^2 = ${squareNumber}`)
    }
    if (squareNumber > number) {
        break;
    }    
}
