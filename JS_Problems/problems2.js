// Suppose you are building a payment checkout page and must display the final price after the discount. Create a simple discount calculator that takes two values from the variables - the total cost and the discount percentage - and prints the discounted value. 

let totalValue = 2000;
let discountPercentage = 20;

let discountedPrice = totalValue - (discountPercentage / 100) * totalValue;
console.log("The final price after discount is: Rs." + discountedPrice);



// You are building a simple login system. Implement the login feature that has two variables: username and password. You should check if the username is "admin" and the password is "12345". If both conditions are true, print "Login successful"; otherwise, print "Invalid credentials". 

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful");
} else{
    console.log("Invalid credentials");
}

// You are working on a currency conversion application. Write a program that has a variable which stores the amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current exchange rate of 1 USD = 82 INR.

let ammountInINR = 850;
let ammountInUSD = 850 / 82;
console.log(`${ammountInINR} INR is ${ammountInUSD} USD`);


// You are developing a booking application for a cinema. The ticket price depends on the type of the viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total price to be paid. Let’s assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.

let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalPrice = 
numberOfChilds * childTicketPrice +
numberOfAdults * adultTicketPrice +
numberOfSeniors * seniorTicketPrice;

console.log(`The total ticket price is ${totalPrice}`);



// You are building a shipping application. Write a program that takes the type of package ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day. 

let typeOfPackage = "overnight";
switch (typeOfPackage) {
    case "standard": // if (package == standard) then the block execute.
        console.log("might take 3-5 days");
        break;

    case "express": // if (package == express) then the block execute.
        console.log("might take 1-2 days");
        break;

    case "overnight": // if (package == overnight) then the block execute.
        console.log("might delivered the next day");
        break;

    default: // if (The expression === none of the previous conditon) then execute this block.
        console.log("Invalid package type!!");
        break;
}

// You are developing a form validation system. Write a program that takes user information(such as name, email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages like "Name should be a string," "Email should be a string," or "Age should be a number." if any field is not proper 

let name = "Aditya";
let email = "190011700008adityasinghmechgpa@gmail.com";
let age = "21";

if (typeof name !== "string") {
    console.log("Name should be in string...");
} else if (typeof email !== "string"){
    console.log("Email should be in string...");
} else if (typeof age !== "number") {
    console.log("Age should be in number...");
} else{
    console.log("Yeah!! all the fields are proper");
}


// You are building a simple shopping list app. You have the items name in an array. Write a program that uses a for loop to print all the items in the shopping list array

let shoppingList = [
    "pen",
    "Paper",
    "Fruits",
    "Vegetables",
    "groceries",
    "beer",
    "soda",
]
for (let index = 0; index < shoppingList.length; index++) {
    console.log(shoppingList[index]);
}


// You are creating a countdown app. Implement a program that uses a while loop to count down from 10 to 1 and prints each number.

console.log("Counting from 10 to 0");
let i = 0;

while (i<=10) {
    console.log(i);
    i++
}


// You are given an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value

// const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     console.log(`Found The First String: ${arr[i]}`);
//     break;
//   }
// }

// You are given with an array of numbers both positive and negative. Your task is to print only the positive numbers.

let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    continue;
  }
  console.log(arr[i]);
}