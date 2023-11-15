const user = {
    username: "Bhuvan",
    price: 99,
// This() refers to current context.

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Aditya"
// user.welcomeMessage()

/* In browser the global object is window */
// console.log(this);


function one(){
    let username = "Aditya"
    console.log(this.username)
}

one()

// const chai  = function(){
//     let username = "Aditya"
//     console.log(this.username);
// }

// chai()


const chai  = () => {
    let username = "Aditya"
    console.log(this);
}

chai() 

// Arrow functions 

/*Explicitely type keyword*/

// const addTwo = (num1, num2) => {    
//     return num1 + num2         // curly braces{} use hua toh return keyword likhna hi padega.
// }

/*implicit type keyword*/

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)     //if we use paranthesis() then no need to use return keyword.

const addTwo = (num1, num2) => ({username: "Aditya"})

console.log(addTwo(5,6))

