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