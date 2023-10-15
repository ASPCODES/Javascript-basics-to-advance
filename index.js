let a = 20;

let b = 40;

function add() {
    // block of Code
    console.log(a + b);
}
add()  /* function calling */

//Function declaration
// Parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 30)
add(4, 5)

// Arguments

// let sum = function add(a, b) {
//     console.log(a + b);
// }

// console.log (sum(30,50));

/* functions are first class citizens */


// function X(param) {
//     console.log("Heyaa");
//     param()
// }

// function y() {
//     console.log("Biee");
// }

// X(y)


// function add(b,c) {
    
//     return function sum() {
        
//     }
// }


function add(a,b) {
    return a - b;
}

let sum = add(100, 50)  // function calling

console.log(sum);