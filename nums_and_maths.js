const balance = new Number(1000)
// console.log(balance);

// Here are some number prototypes

// [[Prototype]]
// : 
// Number
// constructor
// : 
// ƒ Number()
// toExponential
// : 
// ƒ toExponential()
// toFixed
// : 
// ƒ toFixed()
// toLocaleString
// : 
// ƒ toLocaleString()
// toPrecision
// : 
// ƒ toPrecision()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// [[Prototype]]
// : 
// Object

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const anotherNumber = 233.555333;
// console.log(anotherNumber.toPrecision(4));    // It provide round off value 

const hundreds = 1000000;

// India uses thousands/lakh/crore separators.
// console.log(hundreds.toLocaleString('en-IN'));  // LOCAL STRING IS USED TO READ ZERO'S IN DIGITS.

// German uses comma as decimal separator and period for thousands.
// console.log(hundreds.toLocaleString('de-DE'));

// Arabic in most Arabic speaking countries uses Eastern Arabic digits.
// console.log(hundreds.toLocaleString('ar-EG'));

// the nu extension key requests a numbering system, e.g. Chinese decimal.
// console.log(hundreds.toLocaleString('zh-Hans-CN-u-nu-hanidec'));

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian.
// console.log(hundreds.toLocaleString("ban", "id"));


/* *************************************** Maths ****************************************** */

// console.log(Math);

// console.log(Math.abs(-100));
// console.log(Math.round(22.4));
// console.log(Math.ceil(8.2));
// console.log(Math.floor(5.9));
// console.log(Math.min(5, 10, 4, 555 , 44));
// console.log(Math.max(5, 3, 9, 88, 12));

console.log(Math.random());  // Expected output: a number from 0 to <1

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * ( max - min + 1)) + min)