// If statement example
const num = 10;
if (num > 5) {
    console.log("Number is greater than 5");
}
else if (num === 5) { // strict equality check - type and value
    console.log("Number is equal to 5");
} else {
    console.log("Number is less than 5");
}

// Single line if statement
if (num > 5) console.log("Number is greater than 5");

// Switch statement example
const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Truthy values example
const userEmail = []
if (userEmail) {
    console.log("No emails found");
} else {
    console.log("Emails found:", userEmail);
}

// Falsy values in JavaScript - false, 0, "", null, undefined, NaN, -0, bigint(0)
// Truthy values in JavaScript - true, 1, "string", [], {}, function() {}, Symbol(), BigInt(1), 'false'


const emptyObj = {};
if ( Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
else {
    console.log("Object is not empty");
}

// Nullish coalescing operator example : null or undefined(??)
 let val1;
val1 = val1 ?? "Default Value"; // Output: "Default Value"
// val1 = 5 ?? "Default Value"; // Output: 5
// val1 = null ?? "Default Value"; // Output: "Default Value"
// val1 = null ?? 10 ?? "Default Value"; // Output: 10

// If val1 is null or undefined, it will be assigned "Default Value"
console.log(val1);

// Ternary operator example
const age = 18;
const isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: "Adult"

const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: "Welcome back!"