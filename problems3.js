const str = "Adi\"";   // (\") This is Escape sequence character so it counts it as 1 length

console.log(str.length);

1. /* Explore includes() , endswith() , and startwith() function*/

const sentence = 'He rides the bike perfectly'   
//  the includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, or not. 

const keyword = 'rides'

console.log(`The keyword ${"keyword"} ${sentence.includes(keyword) ? 'is' : 'is not'} in the sentence`);


// const str1 = 'There is nothing better than a good cup of hot coffee!'

// console.log(str1.endsWith('coffee!'));


const words = 'Eating fish is good for your health'

console.log(words.startsWith('Eating'));


2. /* Write a program to convert a given string into lowercase() and uppercase() */

const name = "bhuvan"

console.log(name.toLowerCase()); 
console.log(name.toUpperCase());


3. /* Extract the amount out of this string  "Please give Rs 1000" */

let message = "Please give Rs 1000";

let amount = Number.parseInt(message.slice(15))   // Number.parseInt function used to convert strings into numbers.

console.log(amount);
console.log(typeof amount);


4. //Try to change 4th character of a given string  Were you able to do it?

let friend = "Riya"
friend[4] = "S"
console.log(friend);    /* Friend is not changed because String is immuatable */

// charAt() function problem
const text = "aditya singh parmar"
const char = text.charAt(text.length -4)
console.log(char);

// concat() method

const str1 = "Aditya"
const str2 = "Singh"

console.log(str1.concat(' ', str2));