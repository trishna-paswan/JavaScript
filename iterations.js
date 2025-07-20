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
 