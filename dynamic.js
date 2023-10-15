let name = 'Aditya'
console.log(typeof "Aditya");

let selectedColor = null;
console.log(typeof selectedColor);


const person = {
    name: 'Aditya',
    age: 21
};

/* `console.log(person);` is printing the value of the `person` object to the console. */

// Dot notation
person.name = 'Bhuvan';

// Bracket notation
let selection = 'name';
person[selection] = 'mary';

console.log(person.name);