//if we want to do any work repetitively then we use loop
//everytime when 1 loop completed, value will be changed until it meet condition
// Loop are of 2 type definite and indefinite
// Definite loop is when we know how many times we want to repeat the loop (Example For Loop)
// Indefinite loop is when we don't know how many times we want to repeat the loop (Example While Loop and do while loop)
//============================================ For Loop ============================================ (1) ==============================================================
/* for loop has 3 impressions in round bracket 
1. Initialization ==> starting point
2. Condition ==> Ending point
3. Increment/Decrement ==> steps to reach ending point
*/
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
//another example

for (let i = 5; i<=25; i+=5) { //instead of i+=5, we can also write i = i + 5
  console.log(i);
}

for (let i = 5; i>=1; i--) {
  console.log(i);
}

let fruits = ["Apple", "Banana", "Mango", "Orange", "Peach"]
for (let i=0; i<=5; i++){
    console.log(fruits[i])
}
let fruit = ["Apple", "Banana", "Mango", "Orange", "Peach"]
fruit.push("Grapes")
fruit.unshift("Pineapple")
for (let i=0; i<fruit.length; i++){
    console.log(fruit[i])
}
//Another example printing table via for loop
let table = 3
for (let i = 1; i<=10; i++){
    console.log(table + "x " +i+ " = " + (table*i))
}

//============================================ for of Loop ============================================ (2) ==============================================================
let Fruit = ["Apple", "Banana", "Mango", "Orange", "Peach"]
Fruit.push("Grapes")
Fruit.unshift("KADDU")
for (let Phal of Fruit){ //for of loop is used when we don't know the length of the array
    console.log(Phal)
}
//For loop used when you know your ending point
//for and while loop used extesnively
//============================================ While Loop ============================================ (3) ==============================================================
/*Syntax ==> while (condition) {
code to be executed
} let i = 0;
*/
//While loop used when you don't know your ending point (iteration)
let abc = 0
while (abc <= 10) {
  console.log(abc);
  abc++;
}
//============================================ Do While Loop ========================================== (4) ==============================================================
/*Syntax 
do {
  code block to be executed
}
while (condition);
*/
let i = 0
let text = ""
do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);