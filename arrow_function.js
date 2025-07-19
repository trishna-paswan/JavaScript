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