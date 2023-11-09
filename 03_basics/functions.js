
function sayMyName() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// sayMyName();    // arguments

// function addTwoNumbers(number1 , number2) {    // parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2) {  

    // let result = number1 + number2;
    // return result;
    
    return number1 + number2
}

const result = addTwoNumbers(10, 2000);
// console.log("Result:", result);


function loginUserMessage(Username = "Bhuvi") {
    if (Username === undefined) {
    // if (!Username) {         // ! This keyword is used to convert true into false and false into true.
        console.log("Please enter username");
        return
    }
    return  `${Username} just logged in`
}

// console.log(loginUserMessage("Aditya"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1) {     // Here we used rest operator.
    return num1
}

// console.log(calculateCartPrice(100, 3000, 600, 60000, 2000, 4000));


/* Here we pass object in a function */

const user = {
    Username: "Aditya",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.Username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    Username: "Bhuvan",
    price: 299
})

// Here we pass array in a Function.

const myNewArray = [100, 300, 500, 700, 600, 900, 1000]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 100, 10000, 800]));