let score = "33abc"; 
let value = null

console.log(typeof score); 
console.log(typeof(score));

let valueInNumber = Number(score); // Convert string to number
let valueInNull = Number(value); // Convert null to number

console.log(typeof valueInNull);
console.log(typeof valueInNumber); 
console.log(valueInNumber); // NaN (Not a Number)
console.log(valueInNull); // 0 (null is converted to 0)
