// Immediately Invoked Function Expression (IIFE) example

// Immediately Invoked Function Expression (IIFE) example
(function() {
    console.log("This is an IIFE");
})(); // iife is used to remove global scope pollution


// Example of an IIFE with arrow function
(() => {
    console.log("This is an IIFE with arrow function");
})(); // IIFE with arrow function

// Example of an IIFE with parameters
(function(num1, num2) {
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
})(10, 20); // IIFE with parameters

// Example of an IIFE with parameters with arrow function
((num1, num2) => {
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
})(10, 20); // IIFE with parameters using arrow function

