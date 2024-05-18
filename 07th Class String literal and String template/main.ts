//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

let name:string = "Osama bin Adnan"
let age:number = 18;
let country:string = "Pakistan";

//there are 2 ways to print these variables in a statement
//#1 is concatenation, see below
console.log ("My name is "+ name + ", I am "+ age + " years old and I am from " + country);

//2nd method is by using string liternal in it, see below
console.log(`"My name is ${name} I am ${age} years old and I am from ${country}"`);

//Another program
let first_name:string = "Osama";
let middle_name:string = "bin";
let last_name:string = "Adnan";

console.log (first_name +" "+ middle_name +" "+ last_name);
console.log (`${first_name} ${middle_name} ${last_name}`);

