//========================== JAVASCRIPT VARIABLES ==========================

// --- var & let ---

{
    var name = "Senthuran";
    let age = 22;
}

console.log(name);  // prints Senthuran -- var variables can be accessed from any block in the document
console.log(age); //error - cannot access a inblock let variable outside of that block

//var -- outside of the scope allowed
//let -- only inside the scope allowed

//when js code runs the var variable creates a fixed space in the ram which exists through out the program
//but let variable inside a block only exists when js runs that block, when js gone out of that box, the let variable will  be deleted in the ram
//which means let variable created in the ram, only works until the js exist on that block.

// --- const ---

const number = 20;
console.log(number);

const number = 30; //error -- cannot re-assign values to the const declared variables.
console.log(number);