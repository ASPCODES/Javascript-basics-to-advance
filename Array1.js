// Array part 1

const myArr2 = new Array(0, 1, 2, 3, 4, 5)
console.log(myArr2);

const myHeros = ["Spiderman", "Batman", "Captain America"]
console.log(myHeros[2]);


// Array also provide us prototype access.
// Length is alo defined in javascript.



// Array methods

const myArr = [0, 1, 2, 3, 4, 5]
myArr.push(6, 7)   //The element(s) to add to the end of the array.
myArr.pop()        // It removes the last element of the array.

myArr.unshift(10)   // The element will add at the start of the array.
myArr.shift()      // It removes the first element of the array.


console.log(myArr.includes(8));
console.log(myArr.indexOf(10));

const newArr = myArr.join()  // Add all the elements of an array are bind and also converted into strings. 

console.log(typeof newArr);
console.log(myArr)


// slice and splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


// In general, you should use the slice() method when you want to create a new array that is a copy of a portion of an existing array, and you should use the splice() method when you want to add, remove, or replace elements in an existing array.