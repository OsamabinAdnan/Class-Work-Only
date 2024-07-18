//The ternary operator is a simplified conditional operator like if / else.
//Syntax: condition ? <expression if true> : <expression if false>

let result = 5 > 6 ? true:false
console.log(result);

let score = 82
let passingScore = 60
let result1 = (score>passingScore)? "Pass": "Fail";
console.log(result1);

/*
===============Advantage over if/else statement=================
Conciseness: Provides a shorter way to write simple conditional assignments.
Readability: Can make straightforward conditions easier to read and understand at a glance.
Inline Usage: Useful for single-line assignments or returns.
Functional Style: Fits well with functional programming and declarative code.
Avoids Multiple Statements: Reduces the need for extra block statements or scopes.
*/