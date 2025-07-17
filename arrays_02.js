const marvelHeroes = [ "thor" , "ironman" , "hulk" , "spiderman" , "captain america" ];
const dc = ["superman" , "batman" , "flash" , "green lantern"];

const heroes = marvelHeroes.concat(dc);
console.log(heroes); // Output: [ 'thor', 'ironman', 'hulk', 'spiderman', 'captain america', 'superman', 'batman', 'flash', 'green lantern' ]

const allHeroes = [...marvelHeroes, ...dc];
console.log(allHeroes); // Output: [ 'thor', 'ironman', 'hulk', 'spiderman', 'captain america', 'superman', 'batman', 'flash', 'green lantern' ]

marvelHeroes.push(dc);
console.log(marvelHeroes); // Output: [ 'thor', 'ironman', 'hulk', 'spiderman', 'captain america', [ 'superman', 'batman', 'flash', 'green lantern' ] ]