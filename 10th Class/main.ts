//function topic repeat of last class
//return used to read value for function
//if you need value from function then use return
//if you don't need value from function then use void
//void is used to declare function that doesn't return anything

//================================================== ARROW FUNCTION ==================================================================
//Arrow function is used to declare function
//When you use typescript builtin function then you don't need to use arrow function
//if you want to use arrow function then you have to use function keyword
//if you want to use arrow function then you have to use parameters
//Arrow function is used to call builtin function

//Syntax of arrow function
//(parameter1, parameter2, parameter3, ....) => {body}
//function declaration

const Hello = () => {
    console.log("Hello from Arrow function");
}
Hello();

//another program
const digit = (digit:number) => {
    return digit
}
const ans = digit(5);
console.log(ans);

//another program
//Check number is even or old
const even = (digit:number) => {
    if (digit % 2 ==0){
       console.log("Even");
    } else{
        console.log("Odd");
    }
    return digit;
}
even(10);
even(35);

//for function written type ==> const even = (digit:number):number
//if you want to return single statement ==> this happens only in error function ==> w/o bracket {} and w/o return we write KW, see below program
//for string
const name = () => "Osama bin Adnan"
const answer = name();
console.log(answer);
//for number
const num = () => 35
const answerNum = num();
console.log(answerNum);

//another example of functions
function country() {
    console.log("Pakistan")//Pakistan
}
const countries = country()
console.log(countries);//undefined

//another example of functions
function count(count1:string):string{
    console.log ("Pakistan") //Pakistan
    return ("Australia")
}
const map = country(); 
console.log(map) //Undefined

//another example of arrow function calculator
const calucate = (digit1:number,digit2:number, sign:string) => {
    if (sign == "+"){
        console.log(digit1 + digit2)
    } else if (sign == "-"){
        console.log(digit1 - digit2)
    } else if (sign == "*"){
        console.log(digit1 * digit2)
    } else if (sign == "/"){
        console.log(Math.floor(digit1 / digit2))
    } else if (sign == "%") {
        console.log(Math.floor(digit1 % digit2))
    } else {
        console.log(Math.floor(digit1 ** digit2))
    }
}
calucate (125,75,"+");
calucate (125,75,"-");
calucate (125,75,"*");
calucate (125,75,"/");
calucate (125,75,"%");
calucate (125,75,"**");

//============================================ GLOBAL and BLOCK SCOPE VARIABLE ======================================
//Global scope variable are accessible from anywhere
//Block scope variable accessiblity is limited and it scope define by {}
function alisession () {
    let ali = "Ali"
    console.log (ali);
}
alisession();
//Another example
let force = "Army"
function KPS (){
    let KPS = "Kharadar Police station"
    console.log (KPS)
}
console.log(force)
KPS();
//After return statement you can't return anything
//when javascript find any variable to print, it finds it in nearest scope.
let teacher = "Sir Ameen Alam"
function giait () {
    let teacher = "Ali Jawwad"
    console.log (teacher)
}
console.log(teacher);
giait();

//============================================================== ARRAY =======================================================
//multiple varibale can store in array by using single variable.

let sabzi = ["Moli", "Karela", "Aaloo", "Shaljam"]
console.log (sabzi)
// to add any element on specific index
sabzi[3] = "Arvi";
console.log (sabzi)
//to delete last element in array, we used pop() function
sabzi.pop();
console.log (sabzi)
//to add element at the last in array, we used push() function
sabzi.push("Bindi");
console.log (sabzi)
//to delete first element in array, we used shift() function
sabzi.shift()
console.log (sabzi)
//to add element at the start of array, we used unshift() function
sabzi.unshift("Palak")
console.log (sabzi)
