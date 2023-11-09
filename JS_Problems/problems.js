// --------Quick Quiz----------

/* Write a Javascript program to store name phone number and marks of a student using Object */

const student = {
    name: "Aditya",
    phoneNumber: 9810023444,
    marks: "8 CGPA"
};

// console.log(student);
console.table(student)


/* Create a variable of type string and try to add a number to it */

let str = "Welcome";
let num = 100;
console.log(String + num);

/* Use of type of operator to find the datatype of string in last question*/

const variable1 = "Welcome";
const variable2 = 100;
console.log(typeof variable1);
console.log(typeof variable2);

/* Create a const object. Can you change it to hold a number later */

const myObject = {key: "value"}
console.log(myObject);

// modify the properties of the object
// Dot notation
myObject.key = 50;  //change the value of the key property 
console.log(myObject);

/* Write a Javascript Program to create a word meaning dictionary of 5 words */

const wordDictionary = {
    "apple": "A round fruit with red or green skin and sweet flesh.",
    "computer": "An electronic device that can perform a variety of tasks based on instructions given to it.",
    "book": "A bundle of pages that combines to build a book.",
    "ocean": "A vast body of saltwater that covers most of the Earth's surface.",
    "Happy": "Glad.",
}
console.log(wordDictionary);

/* Use logical operators to find whether the age of a person lies between 10 and 20 */

let age = 15;

if(age>10 && age<20){
    console.log("You are a Kid");
}
else if(age>=18){
    console.log("Not a kid");
}
else{
    console.log("Invalid age");
}

// Write a JavaScript program that checks if a given number is even or odd and displays a message accordingly.

let number = 4;

if (number % 2 == 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}

// Create a script that prompts the user to enter their age. If the age is less than 18, display "You are a minor," otherwise display "You are an adult."

// let userAge = 2000;

// if (userAge>18) {
//     console.log("You are an adult");
// }
// else if(userAge<18){
//     console.log("You are a minor");
// }
// else{
//     console.log("Invalid Age");
// }

// Build a function that determines whether a given year is a leap year or not. Leap years are divisible by 4 but not by 100, or divisible by 400.

function isLeapYear(year) {
    if ((year % 4 ==0 && year % 100 !== 0) || year % 400 ==0) {
        return true;
    } else {
        return false;
    }
}

const yearsToCheck = 2020;
if (isLeapYear(yearsToCheck)) {
    console.log(`${yearsToCheck} is a leap year.`);
}
else{
    console.log(`${yearsToCheck} is not a leap year`);
}


// Create a simple login system where the user enters a username and password. If the username and password match predefined values, display a welcome message; otherwise, display an error message.

let username = "Bhuvan"
let password = "1244999"

if (username ==="Bhuvan" && password === "1244999") {
    console.log("Welcome Bhuvan");
} else {
    console.log("Sorry, incorrect Password");
}


// write a javascript program to find whether a number is divisible by 2 and 3

let divisibleNumber = 5;

if (divisibleNumber % 2 ===0 && divisibleNumber % 3===0) {
    console.log("The number is divisible by 2 and 3");
} else {
    console.log("The number is not divisible by 2 and 3");
}

// Demonstrate the use of switch case statements in javascript.

let dayOfWeek = 1;
switch (dayOfWeek) {
    case 1: // if(day ==1) then execute this block)
        console.log("SUNDAY");
        break;
    case 2: // if(day ==2) then execute this block)
        console.log("MONDAY");
        break;
    case 3: // if(day ==3) then execute this block)
        console.log("TUESDAY");
        break;
    case 4: // if(day ==4) then execute this block)
        console.log("WEDNESDAY");
        break;
    case 5: // if(day ==5) then execute this block)
        console.log("THURSDAY");
        break;
    case 6: // if(day ==6) then execute this block)
        console.log("FRIDAY");
        break;
    case 7: // if(day ==7) then execute this block)
        console.log("SATURDAY");
        break;

    default:
        break;
}


// Print "You can drive" or "You can Drive" based on age being greater than 18 using ternary operator.

let userAge = 13;

if (userAge>=18) {
    console.log("You can Drive");
} else {
    console.log("You cannot Drive");
}

// Write a for loop that prints numbers from 1 to 10.

for (let i= 0; i <=10 ; i++) {
    console.log(i);
}

// Write a for loop that prints all odd numbers from 1 to 15.

for (let index = 1; index <=15; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}

// Write a for loop that generates the multiplication table for a given number. For example, if the number is 5, the loop should print:

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

const numb = 5;

for (let index = 1; index <=10 ; index++) {
    const result = numb * index;
    console.log(`${numb} * ${index} = ${result}`);
}


//  Generate the first 20 numbers in the Fibonacci sequence using a for loop.

let a = 0;
let b = 1;

let FibonacciSequence = []

for (let index = 0; index < 20; index++) {
    FibonacciSequence.push(a)

    let temp = a + b;
    a = b;
    b = temp;
}
console.log(FibonacciSequence);