// Simple multiplication function
function multiply (){
    console.log (5*8);
}
multiply();

//Simple addition function with parameters
function add(dig1:number, dig2:number){
    console.log (dig1+dig2);
}
add(10,56);
add(32.5,17.93);

//Another example of simple addition function with parameters
function google_map(to:string, from:string){
console.log(`"I am going to ${to} from ${from}"`)
}
google_map ("Home", "Governor House");
google_map ("University", "Home");

//Void Return Type
//void means empty, if nothing return then it type will be void
function printHello():void{
    console.log ("Hello World!")
}
printHello();

//Optional Parameters
// the `?` operator here marks parameter `c` as optional
function addition(a:number, b:number, c?:number){
    console.log(a+b+ (c || 0))
}
addition (23, 34, 44);
addition (55,44);

//another void function
function ABC():void {
    console.log("Hello World!");
    return
}
console.log(ABC());

//Default parameter of function
function marriage (choice:string = "Ammi ki choice"){
console.log (choice)
}
marriage();
marriage("Abbu ki choice")
marriage ("Meri choice")

//Another example of 'Default parameter' of function
function name_game(username:string = "user12345"){
    console.log("Hello!" +" "+username)
    console.log(`Welcome ${username} to Call of Duty Advanced Warefare`)
}
name_game();
name_game("Osama bin Adnan")

//Another example of 'Default parameter' of function
function num(dig1:any = 5, dig2:number = 2){
    console.log (dig1*dig2)
}
num();
num(6);
num(undefined,3);
num(null,10)

//Return Function
//When we need function value in console.log then we have to return that function
function cooked_meal(type:string,dishname:string){
    return (`${type} ${dishname}`)
}
console.log(cooked_meal("Chicken", "Biryani"));

//another program of return function
function country():string{
    return "Pakistan"
}
console.log(country());

function trueflase():boolean{
    return true
}
console.log(trueflase());

function digits (d1=10,d2=15):number {
    return d1 * d2
}
console.log(digits());
console.log(digits(10,20))
console.log(digits(20,undefined))

//Another program
function information(username:string, age:number):any{
    let info = `"${username}, ${age}"`
    return (info)
}
console.log(information("Osama", 35));



