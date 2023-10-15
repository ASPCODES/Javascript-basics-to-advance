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