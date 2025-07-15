let score = "33abc"; 
let value = null;

console.log(typeof score); 
console.log(typeof(score));

let valueInNumber = Number(score); // Convert string to number
let valueInNull = Number(value); // Convert null to number

console.log(typeof valueInNull);
console.log(typeof valueInNumber); 
console.log(valueInNumber); // NaN (Not a Number)
console.log(valueInNull); // 0 (null is converted to 0)


// "33" -> 33
// "33abc" -> NaN (Not a Number)
// "abc" -> NaN (Not a Number)
// true -> 1
// false -> 0
// null -> 0
// undefined -> NaN (Not a Number)

let isLoggedIn = 1;

let booleanValue = Boolean(isLoggedIn); // Convert number to boolean
console.log(typeof booleanValue); // boolean
console.log(booleanValue); // true (1 is truthy)

let someValue = 33
let someValueInString = String(someValue); // Convert number to string
console.log(typeof someValueInString); // string
console.log(someValueInString); // "33" (number converted to string)

// **************** OPERATIONS ***********************

let a = 3
let negativeA = -a; // Negation
console.log(negativeA); // -3

console.log(2 + 2); // Addition
console.log(2 - 2); // Subtraction
console.log(2 * 2); // Multiplication
console.log(2 / 2); // Division
console.log(2 % 2); // Modulus (Remainder)
console.log(2 ** 3); // Exponentiation (2 to the power of 3)

console.log("Hello " + "World"); // String Concatenation
console.log("Hello " + 2); // String concatenation with number
console.log(2 + 2 + " is the result"); // Addition followed by string concatenation

console.log(+true); // Unary plus operator converts true to 1
console.log(+""); // Unary plus operator converts empty string to 0

let num1, num2, num3;
num1 = num2 = num3 = 5; // Not recommended, but valid

let gameCount = 100;
gameCount++; // prefix increment
++gameCount; // postfix increment
console.log(gameCount); // 101

