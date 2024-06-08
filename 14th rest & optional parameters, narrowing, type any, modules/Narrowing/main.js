//Type narrowing is a process of refining or narrowing down the type using certain conditions with a particular code block.
//It will help developers as well as TypeScript itself to infer the more accurate types within the code and work with them in a clean and strict code environment.
//occurs when a varibale moves from a less precise type to a more precise type ==> be specific
let age;
age = 25;
console.log(typeof age);
age = "25";
console.log(typeof age);
//When you get certain data type like number then we can run functions (for number) on it, same is the case for string
//=====if number=====//
let age1;
age1 = 22.468;
if (typeof age1 === "number") {
    console.log(age1.toFixed(2)); //tofix is a builtin function for number type
}
//=====if string=====//
let age2;
age2 = "Twenty";
if (typeof age2 === "number") {
    console.log(age2);
}
else {
    console.log(age2.toUpperCase());
}
export {};
