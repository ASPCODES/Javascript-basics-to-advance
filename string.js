const name = "Aditya"
const myFollowers = 1200;

console.log(`Hello my name is ${name} and my followers on instagram are ${myFollowers}`);  //${} This is string interpolation.


const gameName = new String('A.S.P.C.OD.ES')

console.log(gameName[2]);  /* Key value pair access. */

console.log(gameName.__proto__);

// console.log(gameName.toLowerCase());
// console.log(gameName.endsWith("S"));
console.log(gameName.charAt(5));
console.log(gameName.indexOf('D'));

// const newString = gameName.substring(1, 5)
// console.log(newString);

const anotherString = gameName.slice(-5, -2)
console.log(anotherString);

const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""

const newStringOne = "     Aditya     "
console.log(newStringOne);
console.log(newStringOne.trim());       // it cuts the extra spaces



const url = 'https:// www.Aditya%3Singh.com'

console.log(url.replace('%3', '-'));

console.log(url.includes('Bhuvan'));


console.log(gameName.split('.'));

