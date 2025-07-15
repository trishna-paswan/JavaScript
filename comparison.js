console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false (loose equality)
console.log(2 !== 1); // true (strict inequality)
console.log(2 == 1); // false (loose equality)
console.log(2 != 1); // true (loose inequality)

console.log("2" > 2); // false (string "2" is converted to number 2)
console.log("2" < 2); // false (string "2" is converted to number 2)

console.log(null == 0); // false (null is not equal to 0)
console.log(null >= 0); // true (null is considered less than or equal to 0)
console.log(null < 0); // false (null is not less than 0)

console.log(undefined == 0); // false (undefined is not equal to 0)
console.log(undefined >= 0); // false (undefined is not greater than or equal to 0)
console.log(undefined < 0); // false (undefined is not less than 0)

// Strict equality checks
console.log(2 === 2); // true (strict equality)
console.log(2 === "2"); // false (strict equality, different types)
