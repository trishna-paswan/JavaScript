function myName() {
    console.log("John Doe");
}
myName(); // Output: John Doe

function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function subtractNumbers(a, b) {
    return a - b;
}
// Example usage of the functions
console.log(addNumbers(5, 3)); // Output: 8
console.log(multiplyNumbers(5, 3)); // Output: 15
console.log(subtractNumbers(5, 3)); // Output: 2
// Example of using the functions defined above
const result = addNumbers(10, 20);
console.log(result); // Output: 30
// Function to greet a user
function greetUser(name) {
    return `Hello, ${name}!`;
}

console.log(greetUser("Alice")); // Output: Hello, Alice!

function User(username) {
    if (username === undefined || username === null) {
        console.log("Username is required");
        return;
    }
    return `User: ${username}`;
}

console.log(User()); // Output: Username is required

// the no of parameters is not fixed
function calculateCartPrice(...items) { // rest parameter
    return items
}

console.log(calculateCartPrice(100, 200, 300)); // Output: [ 100, 200, 300 ]

function calculateTotalPrice(val1, val2, ...prices) {
    return prices
}
console.log(calculateTotalPrice(100, 200, 300, 400)); // Output: [ 300, 400 ]


// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));