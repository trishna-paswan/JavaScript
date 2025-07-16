const name = "hitesh"
const repoCount = 10

console.log(`Hello, my name is ${name} and I have ${repoCount} repositories.`); 
// more reliable way to do this (string interpolation)

console.log("Hello, my name is " + name + " and I have " + repoCount + " repositories.");
// less reliable way to do this (string concatenation)

const gameName = new String("Counter Strike");
console.log(gameName); // String { "Counter Strike" }

console.log(gameName[0]); // C
console.log(gameName.__proto__); // String.prototype

console.log(gameName.length); // 14
console.log(gameName.toUpperCase()); // COUNTER STRIKE
console.log(gameName.charAt(2)); // u
console.log(gameName.indexOf("S")); // 8

const newString = gameName.substring(0, 7); // start number, end number
console.log(newString); // Counter

console.log(gameName.slice(0, 7)); // Counter
console.log(gameName.slice(-7)); // Strike 

const newStringtwo = "      trishna     ";
console.log(newStringtwo.trim()); // trishna
console.log(newStringtwo);

const url = "https://www.google%20com";
console.log(url.replace("%20", ".")); // https://www.google.com
