// primitive data types    They are call by value

// 7 types

/*  1. string 
    2. numbers
    3. Boolean
    4. null =>  stand alone value
    5. undefined
    6. symbol
    7. BigInt
*/

// Symbol

const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id === anotherId);

// BigInt

const bigNumber = 9999995555n


// Reference data type (Non primitive)   call by reference

/* 
  1. Array
  2. Functions
  3. Objects
*/

const heros = ["Batman" , "Spiderman" , "Superman" , "Ironman" , "Hulk"];   // Arrays


// In Objects the data is restored in curly braces, No matter which type of data is stored.

let myObj = {
    name: "Aditya" ,
    age: 21
}

const myFunction = function() {
    console.log("Hello World");
}

// To find the type of data we use

console.log(typeof heros);
