let score = "Aditya";

console.log(typeof score);
console.log(typeof (score));  // As a method

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abf" => NaN
// True => 1
//False => 0

let isLoggedIn = "";

let BooleanisLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanisLoggedIn);

// in Boolean 
// 1 => true; 0 => false
// "" => false; "Aditya" => true


let someNumber = 50;

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********** Operations ***********

let value = 5;
let negValue = -value
/* The line `// console.log(negValue);` is a commented out line of code. It is not being executed and
does not affect the program. It is likely there for debugging purposes or as a reminder for the
developer. */
console.log(negValue);

let str1 = "Heyy"
let str2 = " Aditya"

let str3 = str1 + str2;
console.log(str3);

console.log(2 + "2");
console.log("2" + 2);
console.log("1" + 2 + 3);  // If string first, then all the values are considered as string
console.log(1 + 2 + "3");  // If string is at last,  then first it will do first two numbers conversion


// let gameCounter = 50;
// ++gameCounter;
// console.log(gameCounter);

let a = 3;
const b = a++;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:3"

let x = 45
const y = x++

console.log(`x:${x}, y:${y}`);
