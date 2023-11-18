// Immediately Invoked Function Expressions (IIFE)

// IIFE is defined as when their is pollution due to global scope or variable or whatever decleration, So inorder
// to prevent this we use IIFE.

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // Unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('ADITYA');
