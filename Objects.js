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

// Constrctor Object

// const tinderUser = new Object(); // Singleton object creation

const tinderUser = {} // Non Singleton object creation

// Adding properties to the tinder object
tinderUser.name = "Tinder";
tinderUser.age = 10;
tinderUser.isActive = true;

console.log(tinderUser); 

const regular = {
    email: "some@gmail.com",
    fullname: {
        user: {
            first: "Trishna",
            last: "Paswan"
        }
    }
}

console.log(regular.fullname.user.first); // Output: Trishna
console.log(regular.fullname);

const obj = {1: "one", 2: "two", 3: "three"};
const obj2 = {3: "one", 4: "two", 5: "three"};

// Merging two objects using Object.assign
const mergedObj = Object.assign({}, obj, obj2);
console.log(mergedObj); // Output: { '1': 'one', '2': 'two', '3': 'one', '4': 'two', '5': 'three' }

const users = [
    { name: "Trishna", age: 25 },
    { name: "John", age: 30 },
    { name: "Jane", age: 28 }
]

users[1].age
console.log(Object.keys(users)); // Output: [ 'name', 'age' ]
console.log(Object.values(users)); // Output: [ { name: 'Trishna', age: 25 }, { name: 'John', age: 30 }, { name: 'Jane', age: 28 } ]