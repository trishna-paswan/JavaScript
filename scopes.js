
// Example of variable scopes in JavaScript

let a = 10
const b = 20
var c = 30

console.log(a, b, c); // Output: 10 20 30

if (true) {
    let a = 40; // Block scope variable
    const b = 50; // Block scope constant
    var c = 60; // Function scope variable

    console.log(a, b, c); // Output: 40 50 60
}

console.log(a, b, c); // Output: 10 20 60
