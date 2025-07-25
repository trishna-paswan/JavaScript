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

// Using filters with conditions
const books = [
    { title: "Book A", author: "Author 1", year: 2020 },
    { title: "Book B", author: "Author 2", year: 2019 },
    { title: "Book C", author: "Author 3", year: 2021 },
    { title: "Book D", author: "Author 1", year: 2018 },
    { title: "Book E", author: "Author 5", year: 2022 },
    { title: "Book F", author: "Author 2", year: 2023 }
];
const userBooks = books.filter(book => book.author === "Author 1");
console.log("Books by Author 1:", userBooks); // Output: Books by Author 1: [ { title: 'Book A', author: 'Author 1', year: 2020 }, { title: 'Book D', author: 'Author 1', year: 2018 } ]

// adding new numbers using map

const nums = [1, 2, 3, 4, 5];
const newNums = nums.map(num => num + 10);
console.log("New Numbers:", newNums); // Output: New Numbers: [11, 12, 13, 14, 15]


// Using map to transform numbers with multiple operations
const newNum = nums.map(num => num * 2).map(num => num + 5);
console.log("New Numbers after multiple maps:", newNum); // Output: New Numbers after multiple maps: [7, 9, 11, 13, 15]
