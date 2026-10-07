//========================== ARRAY(ARRAYLIST) METHODS ==========================

let customerList = [];

// --- push ---

customerList.push("senthuran");
console.log(customerList); // prints ["senthuran"]
 
customerList.push("bineth");
console.log(customerList); // prints ["senthuran", "bineth"]

// --- reverse ---

customerList.reverse();
console.log(customerList); // prints ["bineth", "senthuran"]

// --- pop ---

customerList.pop();
console.log(customerList); // prints ["bineth"]

// --- filter ---

const productList = [
    {name:"bun", inStock:true, price:100},
    {name:"milk", inStock:true, price:200},
    {name:"egg", inStock:false, price:300},
    {name:"bread", inStock:true, price:400},
    {name:"butter", inStock:false, price:500}
];


//filtering for find the objects whose inStock is true

//method 1

// let inStockProducts = productList.filter(
//     function(product){
//         return product.inStock==true;
//     }
// );

// function productFilter(product){
//     return product.inStock==true;
// }

//method 2

// let inStockProducts = productList.filter(
//     function(product){
//         return product.inStock==true;
//     }
// );

// console.log(inStockProducts);

//method 3

let inStockProducts = productList.filter(product => product.inStock==true);

console.log(inStockProducts);

// --- sort ---

const letters = ["D", "A", "C", "B", "E", "Z", "N", "L", "I", "O"];
console.log(letters);

const sorted = letters.sort();
console.log(sorted);

// --- map ---

const salary = [50000, 60000, 70000, 80000, 90000];
console.log(salary); /// prints [50000, 60000, 70000, 80000, 90000]

const doubledSalary = salary.map(salary => salary*2);
console.log(doubledSalary); // prints [100000, 120000, 140000, 160000, 180000] 

// --- find ---

const studentList = [
    {name:"Saman", age:20 , gender:"male"},
    {name:"Nimal", age:25 , gender:"male"},
    {name:"Kamal", age:30 , gender:"male"},
    {name:"Sunil", age:35 , gender:"male"},
    {name:"Kumara", age:40 , gender:"male"},
]

console.log(studentList.find(student => student.name=="Nimal"));