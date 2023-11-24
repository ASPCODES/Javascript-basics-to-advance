// Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not.

    const allUsers = [
    "Anurag",
    "Mithun",
    "Bhuvan",
    "Prabir",
    "Vinay",
    "Shubham",
    "Shivam",
    "Farman",
    ]

    function isUserPresent(user) {
        if (allUsers.includes(user)) {
            console.log(`Yes ${user} is a valid user.`)
            return true;
        }else{
            console.log(`No the ${user} is not a valid user`);
            return false;
        }
    }

    isUserPresent("Mithun")
    isUserPresent("Random")


// Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all the products in a customer's cart as input parameters. The function should then calculate and return the total sum of all the product prices. This will help the company easily calculate the total cost of the customer's shopping cart.


function calculateCartPrice(val1, val2, val3) {
    return val1 + val2 + val3;
}

console.log(calculateCartPrice(125, 30, 20));


// Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying, "Congratulations [Student Name]! You have cleared the exam."


const students = [
    {
        name: "Mithun",
        marks: 95
    },
    {
        name: "Prabir",
        marks: 75
    },
    {
        name: "Alka",
        marks: 80
    },
    {
        name: "Shivam",
        marks: 70
    },
    {
        name: "Farman",
        marks: 60
    },
]

function checkResults(students) {
    const highAchievers = students.filter(student => student.marks > 90);
    highAchievers.forEach(student => {
      console.log(`Congratulations ${student.name}! You have cleared the exam.`);
    });
  }

  checkResults(students)


// You are working for an e-commerce client, and they provide you with an array of objects containing product names and their prices. Your task is to create a function that finds the product with the maximum amount (the highest price) and the product with the minimum amount (the lowest price) and prints them to the console.


const product = [
    {
        name: "Laptop",
        price: 120000
    },
    {
        name: "Mobile",
        price: 70000
    },
    {
        name: "Laptop Bag",
        price: 20000
    },
    {
        name: "Watch",
        price: 20000
    },
    {
        name: "Mobile Charger",
        price: 1500
    }
]

const maxProduct = product.reduce((currentMax, product) =>{
    if (product.price > currentMax.price) {
        return product;
    }
    return currentMax
});

const minProduct = product.reduce((currentMin, product) =>{
    if (product.price > currentMin.price) {
        return product
    }
    return currentMin
});

console.log("Product with the maximum price:");
console.log(maxProduct);

console.log("Product with the minimum price:");
console.log(minProduct);


// Let’s say you are working for an event management company. You have a list of guest names as an array of strings. Your task is to return a sentence that has all the guest names, separated by commas.

const guest = ["Anurag", "Mithun", "Alka", "Prabir", "Shivam", "Farman"]

console.log(guest.join(", "));


// You are working for an e-commerce company, and you are given an object containing product-related information. Your task is to print the product-related information details as shown in the image below.

const productDetails = {
    name: "Apple 2020 Macbook Air Laptop",
    price: 82000,
    color: "Gray",
    hardDisk: "256GB"
}

console.log("Below are the product details.");
for(let keys of Object.keys(productDetails))
console.log(`${keys}: ${productDetails[keys]}`);


// Imagine you are working for a digital banking platform, and your team is tasked with improving the security of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP (OneTime Password) for authentication purposes.

function generateOTP() {
    let otp = "";
    for(let i = 0; i < 4; i++){
        otp+= Math.floor(Math.random()*10)
    }
    return otp
}
console.log(generateOTP());


// Let’s say you are working for an event management company. As a web developer, you need to build a countdown timer for an upcoming event. You need to build a function that calculates the number of days between the current date and the event's start date.

function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);
  
    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysRemaining;
  }
  
  const eventDate = '2024-01-10';
  console.log(calculateRemainingDays(eventDate));
  

// As a web developer, you need to create a function that takes a username string as input and checks if it contains only unique characters.  Use a Set to implement this efficiently.

function uniqueCharactersCheck(inputString) {
    const charSet = new Set();
    for(const char of inputString){
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char)
    }
    console.log("The input string contains only unique characters.");
}

uniqueCharactersCheck("Bhuvan")
uniqueCharactersCheck("anurag")
uniqueCharactersCheck("Hitesh")


// As a web developer, your task is to build a function that examines a sentence and counts how many times each unique word appears in it. Using a Map, the function efficiently keeps track of the occurrence of each word in the sentence.

function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); // Split the sentence into words using whitespace as separator

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);

