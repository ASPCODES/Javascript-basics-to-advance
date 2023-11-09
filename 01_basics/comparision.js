console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 

 // it is true because the equality check == and comparision >< > = work differently.
 //  comparisions convert null to a number, treating it as a zero that's why null >=0 is true and
 // null > 0 = false.

// ===  it checks the value strictly

console.log("3"=== 3);