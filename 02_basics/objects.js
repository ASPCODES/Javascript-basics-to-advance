// Singleton :-
// Object.create( constructor method)

//if we declare in the form of literals then singleton is not formed as it only formed 
// when it will be declared in the form of constructor.


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aditya",
    "Full name": "Aditya Singh Parmar",
    age: 21,
    [mySym]: "mykey1", 
    location: "Kurukshetra",
    email: "sbhuvan286@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday", "Wednesday"]
}

console.log(JsUser.age);  // in this method where we use JsUser. in this we can simply write the value with commas.

console.log(JsUser["age"]);  // in this method we have to give value for eg- age in string because object
 // see the value in string.

//  console.log(JsUser["Full name"]);

//  console.log(JsUser[mySym]);

 JsUser.email = "bhuvan@Gpt.com"  // It change the value 
//  console.log(JsUser.email);     

//  Object.freeze(JsUser)  // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 JsUser.email = "Aditya@google.com"
//  console.log(JsUser);

 JsUser.greeting = function() {
    console.log("Hello Js User");
 }
 
 JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);   // when we reference the same object ${this} is used
 }
 
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());


 function greet(){
    let name = "John";
    console.log(`Hello, ${name}`);
 }

 function changeName() {
    name = "Alice";
    console.log(`Name changed to ${name}`);
 }

 greet();
 changeName();
 greet();