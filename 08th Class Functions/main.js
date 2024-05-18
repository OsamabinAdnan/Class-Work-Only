//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>STATIC FUNCTION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//declaring function
function hello() {
    console.log('"Hello world from FUNCTION"');
}
//calling fucntion
hello();
//Another program
function name() {
    console.log(`"Hello Ali!"`); //static because not everybody has name 'Ali'
}
;
name();
//Another program
function halfFryEgg() {
    let cooked = 1 + 1.5 + 2;
    console.log(cooked);
}
halfFryEgg();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> RETURNING FUNCTION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
function halfFryEggs() {
    let cooked = 3 + 1.5 + 5;
    return cooked;
}
let response = halfFryEggs(); //invoking the function
console.log(response);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>DYNAMIC FUNCTION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//Parameter ==> also called function variable ==> dynamic function
//2 functions should not have same name
//Syntax function name(parameters){whatever you want to enter in this function write here} call function
function user_info(name, age, email) {
    console.log(`"My name is ${name}, I am ${age} years old and my email address is ${email}"`);
}
user_info("Osama", 35, "osama@gmail.com");
user_info("Ali", 25, "ali@gmail.com");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SQUARE ROOT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
function square_root(digit) {
    console.log(digit * digit);
}
square_root(16);
square_root(125);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>CUBE ROOT<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
function cube_root(digit) {
    console.log(digit * digit * digit);
}
cube_root(16);
cube_root(125);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>ADDITION<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
function addition(digit1, digit2) {
    console.log(`"The addition of ${digit1} and ${digit2} is ${digit1 + digit2}"`);
}
addition(45, 95);
addition(145, 395);
addition(97, 341);
export {};
