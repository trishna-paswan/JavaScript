// Singleton object 
// Objects literal

const Sym = Symbol("unique"); // Using Symbol to create a unique property

const myObjects = {
    name: "Trishna", "Full Name": "Trishna Paswan",
    [Sym]: "Paswan",
    age: 25,
    isStudent: true,
    lastlogin: ["Monday", "Tuesday", "Wednesday"]
}

// Accessing object properties
console.log(myObjects.name); // Output: Trishna
console.log(myObjects["age"]); // Output: 25
console.log(myObjects["Full Name"]); // Output: Trishna Paswan
console.log(myObjects[Sym]); // Output: Paswan

Object.age = 26; // Updating age
console.log(myObjects.age); // Output: 26

// Object.freeze(myObjects); // Freezing the object to prevent further modifications
// console.log(myObjects);

// Function to greet 

myObjects.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
myObjects.greet(); // Output: Hello, my name is Trishna and I am 26 years old.

// Function 
console.log(myObjects.greet); // Output: [Function: greet]