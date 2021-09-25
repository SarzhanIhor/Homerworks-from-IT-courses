const  element = prompt(`Enter at least 4 numbers separated by commas`);
const mass = element;
console.log(mass.split(','));
const result = mass.split(',');
if (result.length >= 4) {
result.sort(function(a,b){ 
   return a - b
 })
console.log(result);  
result.splice(1,3);
console.log(result);}
else  {
    console.log(`Less than four numbers entered!`);    
}


