// if statement

let age: number = 50;
if (age < 60) {
  console.log("My age is " + age); //true
}
age = 61;
if (age <= 60) {
  console.log("Now my age is " + age); //false
}
console.log("Hello " + age);

//if and else statement

let email: string = "ali@gmail.com";
let username: string = "Alikhan";
let password: string = "ali1234";
if (
  (email === "ali@gmail.com" || username === "Alikhan") &&
  password === "ali1234"
) {
  console.log("Welcome Ali! you are successfully logged in");
} else {
  console.log("Please enter valid email and password");
}

//if else if statement
let subject: string = "Maths";
let marks: number = 95;

if (marks >= 90 && marks <= 100) {
  console.log(`"You got A+ grade in ${subject}"`);
  console.log("Excellent!");
} else if (marks >= 80 && marks <= 89) {
  console.log(`"You got A grade in ${subject}"`);
  console.log("Very Good!");
} else if (marks >= 70 && marks <= 79) {
  console.log(`"You got B grade in ${subject}"`);
  console.log("Good!");
} else if (marks >= 60 && marks <= 69) {
  console.log(`"You got C grade in ${subject}"`);
  console.log("Fair!");
} else if (marks >= 50 && marks <= 59) {
  console.log(`"You got D grade in ${subject}"`);
  console.log("Need Improvement!");
} else {
  console.log(`"You are fail in ${subject}"`);
  console.log("Disgusting!");
}
