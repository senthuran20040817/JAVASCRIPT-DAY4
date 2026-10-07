//========================== CONST IN ARRAYLISTS ==========================

let customerList = ["senthuran", "bineth" , "isira"];
console.log(customerList); //prints ["senthuran", "bineth" , "isira"]

customerList = "kaveesha";
console.log(customerList); //prints kaveesha

//this is a proble. when using let, customerlist is changing arraylist to string.
//this is happen by mistake when we code thousands of lines.

//to reduce this mistake, we can use const variables.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); //prints [1, 2, 3, 4, 5]

numbers = 5; //error -- const variables cannot be re-assigned

//but pushing to a const assigned variables is allowed , even it is a const variable

const letters = ["a", "b", "c", "d"];

letters.push("e");
console.log(letters); //prints ["a", "b", "c", "d", "e"]