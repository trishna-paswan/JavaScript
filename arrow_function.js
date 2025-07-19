// This code demonstrates the use of an arrow function to create a method within an object.
const user = {
    username: "john_doe",
    price: 29.99,

    message : function() {
        // Using 'this' to access the current object's properties
        console.log(`Hello, ${this.username}! Your subscription costs $${this.price}.`);
    }   
};

user.message(); // Output: Hello, john_doe! Your subscription costs $29.99. 
user.username = "sam_doe";
user.message(); // Output: Hello, sam_doe! Your subscription costs $29.99.

const user2 = {
    username: "john_doe",
    price: 29.99,

    message2 : function() {
        console.log(`Hello, ${this.username}! Your subscription costs $${this.price}.`);
        console.log(this); // Output: user2 object
    }   
};
console.log(this); // Output: global object (in browser, it's window; in Node.js, it's global)

function chai() {
    console.log(this); // Output: global object (in browser, it's window; in Node.js, it's global)");
    
}
chai(); // Output: global object (in browser, it's window; in Node.js, it's global)

// Example of an arrow function
const chai1 = (num1, num2) => {
    return num1 + num2;
}
console.log(chai1(10, 20)); // Output: 30
    
// Example of an arrow function with implicit return
const chai2 = (num1, num2) => num1 + num2;
console.log(chai2(10, 20)); // Output: 30

// Example of an arrow function returning an object
const chai3 = (num1, num2) => ({username: "hitesh", price: 199});
console.log(chai3(10, 20)); // Output: { username: 'hitesh', price: 199 }

// Example of an arrow function without a return statement
const chai4 = (num1, num2) => { num1 + num2 }
console.log(chai4(10, 20)); // Output: undefined (because there's no return statement)