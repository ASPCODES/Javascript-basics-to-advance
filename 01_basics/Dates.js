// Date is an object in Javascript.

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toDateString());

// console.log(myDate.toTimeString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toUTCString());

// console.log(typeof myDate);


/* IN JAVASCRIPT MONTHS STARTS WITH ZERO*/

// let myCreatedDate = new Date(2023, 0, 9);
// let myCreatedDate = new Date("2023-01-23");  // YY-MM-DD
let myCreatedDate = new Date("01-15-2023");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// STRING INTERPOILATION   =  `${}`


// HERE ARE SOME INTERNATIONALIZATION IN toLocaleString()

// "hi": Hindi (language)

// "de-AT": German (language) as used in Austria (region)

// "zh-Hans-CN": Chinese (language) written in simplified characters (script) as used in China (region)

// "en-emodeng": English (language) in the "Early modern English" dialect (variant)



// const date = new Date();
// const monthName = date.toLocaleString('hi', { month: 'long' });
// console.log(monthName); 

const date = new Date();

const localDate = date.toLocaleString("en-US");
const newYorkDate = date.toLocaleString("en-US", { timeZone: "Indian/Chagos" });

console.log(localDate); 
console.log(newYorkDate); 


