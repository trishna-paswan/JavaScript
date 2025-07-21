const Nums = [1, 2, 3, 4, 5];
// Using reduce to sum numbers
const sum = Nums.reduce((accumulator, currentValue) => {
    console.log("Accumulator:", accumulator, "Current Value:", currentValue);
    return accumulator + currentValue;
}, 0); // Initial value is 0
console.log("Sum of Numbers:", sum); // Output: Sum of Numbers: 15

// Using reduce with arrow function
const product = Nums.reduce((accumulator, currentValue) => {
    console.log("Accumulator:", accumulator, "Current Value:", currentValue);
    return accumulator * currentValue;
}, 1); // Initial value is 1
console.log("Product of Numbers:", product); // Output: Product of Numbers: 120

const shoppingCart = [
    { item: "Apple", price: 2, quantity: 3 },
    { item: "Banana", price: 1, quantity: 5 },
    { item: "Orange", price: 3, quantity: 2 }
];
// Using reduce to calculate 
const totalCost = shoppingCart.reduce((accumulator, currentItem) =>  accumulator += currentItem.price * currentItem.quantity, 0);
console.log("Total Cost of Shopping Cart:", totalCost); // Output: Total Cost of Shopping Cart: 23