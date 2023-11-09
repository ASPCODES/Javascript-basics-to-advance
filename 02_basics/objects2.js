// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()



// const tinderUser = new Object()   // this is a Singleton object.
const tinderUser = {}   // This is non singleton object.

tinderUser.id = "1445Dac"
tinderUser.name = "Bhuvan Singh"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "ABC@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Aditya", 
            lastname: "Singh"
        }
    }
}

 // console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1 , obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj4);

const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
]

users [1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));
console.log(tinderUser.hasOwnProperty('name'));

console.log(tinderUser.propertyIsEnumerable('id'));



// ****************** De-Structuring And Intro to JSON *************************

const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh choudhary"
}

const {courseInstructor: instructor} = course   // Here we use object de-structure or doing de-structuring.

console.log(instructor);

// console.log(courseInstructor);
// console.log(courseName);
// console.log(price);


 /* JSON API */     //It is also an Object.


// OBJECT API 

// {
//     "name": "Aditya Singh",
//     "Email": "abc2gmail.com"
// }

// ARRAY API

[
    {},
    {},
    {}
]
