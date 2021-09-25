let result = '';
for (let i = 20; i <= 30; i += 0.5) {    
     result += i === 30 ? i : `${i} `     
}
console.log(`Number from 20 to 30 with 0.5 step = ${result}`); 
