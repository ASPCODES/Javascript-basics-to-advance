// Function with single parameter

// function greet(name) {
//     console.log(`Hello ${name}!`);
// }

// greet("Bhuvan");
// greet("Aditya");
// greet();

// Function with default parameter

function greet(name = "guest") {
    console.log(`Hello ${name}!`);
}

greet("Bhuvan");
greet("Aditya");
greet();

// Function with multiple parameters.

function calculateSum(num1, num2) {
    return num1 * num2
}

console.log(calculateSum(130, 1000));