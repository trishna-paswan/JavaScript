const marvelHeroes = [ "thor" , "ironman" , "hulk" , "spiderman" , "captain america" ];
const dc = ["superman" , "batman" , "flash" , "green lantern"];

const heroes = marvelHeroes.concat(dc);
console.log(heroes); // Output: [ 'thor', 'ironman', 'hulk', 'spiderman', 'captain america', 'superman', 'batman', 'flash', 'green lantern' ]

const allHeroes = [...marvelHeroes, ...dc];
console.log(allHeroes); // Output: [ 'thor', 'ironman', 'hulk', 'spiderman', 'captain america', 'superman', 'batman', 'flash', 'green lantern' ]

marvelHeroes.push(dc);
console.log(marvelHeroes); // Output: [ 'thor', 'ironman', 'hulk', 'spiderman', 'captain america', [ 'superman', 'batman', 'flash', 'green lantern' ] ]

const Another = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
const reallyAnother = Another.flat(Infinity); // return all elements in a single array
console.log(reallyAnother); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

console.log(Array.isArray(Another)); // Output: true
console.log(Array.isArray("Hello")); // Output: false

console.log(Array.from("Hello")); // Output: [ 'H', 'e', 'l', 'l', 'o' ]

// Interesting behavior with Array.from
console.log(Array.from({ name: "trishna"})); // Output: []

let score1 = 100;
let score2 = 200;
let score3 = 300;

let scores = Array.of(score1, score2, score3);
console.log(scores); // Output: [ 100, 200, 300 ]
