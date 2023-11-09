const account_Id = 13556
let accountEmail = "aditya23@gmail.com"
var accountPassword = "12345"
let accountState;

// account_Id = 2 // not allowed

accountEmail = "asp.as@gmail.com"
accountPassword = "444532"

console.log(account_Id);

/*
prefer not use var 
bacause of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountState])

// javascript is a case sensitive