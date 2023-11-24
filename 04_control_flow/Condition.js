// Some operators in if else condition.

// <, >, <=, >=, ==, !=, ===, !==


// if (condition) {
                          /* condtional statement using if else*/
// } else {
    
// }


let dividend = 10
let divisor = 0

if (divisor !=0) {
    let result =  dividend/divisor
    console.log(result);
} else{
    console.log('Your divisor is zero');
}

let age = 18

if (age > 20) {
    console.log('No you are not adult'); 
} else{
    console.log('Yes you are adult');
}


let isAdmin = false

if (isAdmin) {
    console.log("Getting Admin details");
}else{
    console.log("Getting user details");
}

// Nested if else statements

let a = 10
let b = 300
let c = 50

if (a > b) {
    if (a > c) {
        console.log("A is greatest");
    } else{
        console.log("C is greatest");
    }
} else{
    if (b > c) {
        console.log("B is greatest");
    } else{
        console.log("C is greatest");
    }
}


// const userLoggedIn = true;
// const temperature = 40;

// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 500

// if (score>400) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);   "It will not execute outside the scope."

const balance = 1000

// if (balance>500) console.log("test");   // Implicit scope


/*Nested condition*/

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 800) {
    console.log("Less than 800");
} else if (balance < 900) {
    console.log("less than 900");
}

else{
    console.log("less than 1500");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const GuestUser = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow access to buy");
}

if (loggedInFromGoogle || loggedInFromEmail || GuestUser) {
    console.log("User logged in");
}
