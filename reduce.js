const Nums = [1, 2, 3, 4, 5];
// Using reduce to sum numbers
const sum = Nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 
console.log("Sum of Numbers:", sum); // Output: Sum of Numbers: 15