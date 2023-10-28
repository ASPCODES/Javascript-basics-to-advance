const marvel_heros = ["Spiderman", "Ironman", "Hulk"]
const Dc_heros = ["Superman", "Batman", "Flash" ]

// marvel_heros.push(Dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3] [1]);

// const myHeros = marvel_heros.concat(Dc_heros)

// console.log(myHeros);


const myHeros = [...marvel_heros, ...Dc_heros]  
 // Here we use a new operator called "Spread" which print the value as an single indvidual not in array
 // also It is an alternate of concat() 
 //which is an example of as we drop a glass when
 // it touches the floor, the pieces of glasses spreads on the floor.

console.log(myHeros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   // Flat operator gives all the value in a single array.

console.log(real_another_array);

console.log(Array.isArray("Bhuvan"))
console.log(Array.from("Bhuvan"))  // converts value into array

console.log(Array.from({name: "Aditya"})); // intersting case from interview perspective

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

