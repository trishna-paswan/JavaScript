const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get even numbers
const evenNums = myNums.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNums);

// Using filter to get odd numbers using forEach
const oddNums = [];
myNums.forEach(num => {
    if (num % 2 !== 0) {
        oddNums.push(num);
    }
});
console.log("Odd Numbers:", oddNums);