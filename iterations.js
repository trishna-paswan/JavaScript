// for loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}

// Break statement example
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break; // Exits the loop when i equals 5
    }
    console.log("Current number:", i);
}

// Continue statement example
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("Skipping even number:", i);
        continue; // Skips the rest of the loop for even numbers
    }
    console.log("Current odd number:", i);
}

// Nested loops example
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`Outer loop ${i}, Inner loop ${j}`);
    }
}

// array iteration using forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`Index: ${index}, Number: ${num}`);
});

// while loop example
let count = 0;
while (count < 5) {
    console.log("Count is:", count);
    count++;
}

// do-while loop example
let index = 0;
do {
    console.log("Index is:", index);
    index++;
}
while (index < 5);

// array while loop example
const fruits = ["apple", "banana", "cherry"];
let fruitIndex = 0;
while (fruitIndex < fruits.length) {
    console.log("Fruit:", fruits[fruitIndex]);
    fruitIndex++;
}

// Using for...of loop to iterate over an array
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log("Color:", color); // Output: Color: red, Color: green, Color: blue
}

// Using for...in loop to iterate over an object
const person = { name: "Alice", age: 30, city: "New York" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: Alice, age: 30, city: New York
}

// Using for...in loop to iterate over an array (not recommended, but possible)
const arr = [10, 20, 30];
for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}

// Maps
const map = new Map();
map.set("name", "John");
map.set("age", 25);
map.set("city", "New York");
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Using forEach to iterate over an array
const codingLanguages = ["JavaScript", "Python", "Java"];
codingLanguages.forEach((language, index) => {
    console.log(`Language ${index + 1}: ${language}`); // Output: Language 1: JavaScript, Language 2: Python, Language 3: Java
}); 

const numbersArray = [10, 20, 30, 40];
numbersArray.forEach(function (val){
    console.log("Value:", val); // Output: Value: 10, Value: 20, Value: 30, Value: 40
});

const myCode = [
    { 
        id: 1,
        language: "JavaScript" 
    },
    { id: 2, language: "Python" },
    { id: 3, language: "Java" }
]
myCode.forEach(function (code) {
    console.log(`ID: ${code.id}, Language: ${code.language}`); // Output: ID: 1, Language: JavaScript, ID: 2, Language: Python, ID: 3, Language: Java
});

// Using forEach to iterate over an array of programming languages
const coding = ["JavaScript", "Python", "Java"]

const values = coding.forEach( (item) => {
    console.log("Programming Language:", item); // Output: Programming Language: JavaScript, Python, Java
    return item; // This return value is ignored by forEach
})

console.log("Values:", values); // Output: Values: undefined (forEach does not return a value)
