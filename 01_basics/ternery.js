let isUserLoggedIn = true;
let isTheCoursePurchased = true

if (isUserLoggedIn) {
    console.log("Yes, the user is already logged in");
} else{
    console.log("No, the user is not logged in");
}

// ternary operator 
// For Eg - condition ? :

isUserLoggedIn ? console.log("Welcome to the website") : console.log("Please Login");

//  condition ? condition ? : :

isUserLoggedIn
? isTheCoursePurchased
? console.log("Access Granted") 
: console.log("Access Denied!! Please buy the course")
: console.log("Access Denied!! Please login");
