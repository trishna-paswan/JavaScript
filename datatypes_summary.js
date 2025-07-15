// Primitive data types - Call by value
// 7 types: string, number, boolean, null, undefined, symbol, bigint

const score = 100
const scroreValue = 100.3
const isPassed = true
const user = null
let userName; // undefined

const id = Symbol('123'); // unique identifier
const anotherId = Symbol('123'); // different symbol, even with same description

console.log(id === anotherId); // false, symbols are unique

const bigIntValue = 1234567890123456789012345678901234567890n // large integer


// Non-primitive data types - Call by reference
// 1 type: object (including arrays, functions, etc.)

const heros = ["Shaktimaan", "Superman", "Batman"];

let myObject = {
    name: "Trishna Paswan",
    age: 19,

}

const greet = function() {
    console.log("Hello");
}

console.log(typeof bigIntValue); // bigint
console.log(typeof greet); // function
console.log(typeof heros); // object (arrays are a type of object)
console.log(typeof myObject); // object