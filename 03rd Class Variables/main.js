"use strict";
//Variable for String/text
let firstName = ("Osama bin Adnan");
let nationality = ("Pakistani");
let message = ("I am a programmer");
let age = ("35");
//when 2 or more string add, it is called Concatenation 
console.log(firstName + " " + nationality + " " + message + " " + age);
//we can change value in variable as well
firstName = "Arham";
console.log(firstName + nationality + message + age);
console.log(typeof firstName);
console.log(typeof nationality);
console.log(typeof message);
console.log(typeof age);
//variable for number
let ageNew = 5;
let weight = 10;
let originalNumber = 20;
let value = "1";
console.log(ageNew + weight + originalNumber);
console.log(ageNew - weight - originalNumber);
console.log(ageNew * weight * originalNumber);
console.log((ageNew * weight) / originalNumber);
console.log(weight ** ageNew);
console.log(weight % ageNew);
//when string add with number, number concatenate with string and becomes string
console.log(ageNew + value);
//Variable for boolean
let isFeepaid = true;
let isMarried = false;
console.log(isFeepaid);
console.log(isMarried);
