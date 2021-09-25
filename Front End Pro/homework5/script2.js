const mass = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(mass);
// 2.a Найти сумму и количество положительных элементов.

posNum = [],
negNum = []; 
for(let i = 0; i < mass.length; i++) { 
    mass[i] >= 0 ? posNum.push(mass[i]) : negNum.push(mass[i]);
}
const result = 'Count of positive numbers: ' + posNum.length + '' ;
console.log(result);
const sum = posNum.reduce((sum, current) => sum + current, 0);
console.log(`Sum of positive numbers ${sum}`) 

// 2.b Найти минимальный элемент массива и его порядковый номер.

const min = Math.min(...mass);
const minPos = mass.indexOf(min);
console.log(`Minimum element of an array ${min}, position ${minPos}`)

// 2.c Найти максимальный элемент массива и его порядковый номер.

const max = Math.max(...mass);
const maxPos = mass.indexOf(max);
console.log(`Maximum element of an array ${max}, position ${maxPos}`)

// 2.d Определить количество отрицательных элементов.

const result2 = 'Count of negative numbers: ' + negNum.length;
console.log(result2);

// 2.e Найти количество нечетных положительных элементов. 
posNumOdd = [];
posNumEven = [];
for(let i = 0; i < posNum.length; i++) { 
    posNum[i] % 2 > 0 ? posNumOdd.push(posNum[i]) : posNumEven.push(posNum[i]);
}
const result3 = 'Count of Odd positive numbers: ' + posNumOdd.length ;
console.log(result3);

// 2.f Найти количество четных положительных элементов.

const result4 = 'Count of even positive numbers: ' + posNumEven.length;
console.log(result4);

// 2.g Найти сумму четных положительных элементов.
console.log(posNumEven);
const sumPosNumEven = posNumEven.reduce((sum, current) => sum + current, 0);
console.log(`Sum of even positive numbers ${sumPosNumEven}`) 

// 2.h Найти сумму нечетных положительных элементов.
console.log(posNumOdd);
const sumPosNumOdd = posNumOdd.reduce((sum, current) => sum + current, 0);
console.log(`Sum of odd positive numbers ${sumPosNumOdd}`) 

// 2.i Найти произведение положительных элементов.

let multi = 1;
for(let i = 0; i < posNum.length; i++) {
    multi = multi * posNum[i];
}
console.log(`Multiplication of positive numbers ${multi}`);

// 2.j Найти наибольший среди элементов массива, остальные обнулить.

 console.log(`Maximum element of an array ${max}, position ${maxPos}`)
for (let i = 0; i < mass.length; i++) {
    if(i != maxPos) {
        mass[i] = 0;        
    }
}
console.log(mass);
