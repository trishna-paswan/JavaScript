const score = 400;
console.log(score);

const balance = new Number(1000);
console.log(balance); // Number { 1000 }
console.log(balance.toString()); // "1000"

console.log(balance.toFixed(2)); // "1000.00

const num = 123.456789;
console.log(num.toPrecision(4)); // "123.5"

const hundred = 100000;
console.log(hundred.toLocaleString('en-IN')); // "1,00,000"

// --------------- math operations ---------------

console.log(Math); 

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-10)); // 10
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100
console.log(Math.round() * 10 + 1); // Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10

const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Random number between 10 and 20



