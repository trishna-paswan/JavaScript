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


// Non-primitive data types - Call by reference
// 1 type: object (including arrays, functions, etc.)
