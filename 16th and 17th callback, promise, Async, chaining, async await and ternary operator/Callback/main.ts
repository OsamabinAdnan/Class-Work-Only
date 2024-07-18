//======================== Callback function without argument ========================
// if you have created tsconfig.json file then you can use/assign type for callback function i.e., cb:() => void

let first = (cb:() => void) => {
    console.log("First function executed");
    cb()
}
let second = () => {
    console.log("Second function executed");
}
first(second);

//======================== Callback function argument ========================

function sum (cb:(res:number)=>void,a:number, b:number){
    let result = a + b
    cb(result)
}
function displayResult (result:number){
    console.log(result);
}
sum(displayResult, 10, 20)

// ======================== With SetTimeout ========================
function One (cb:()=>void){ //higher order function
    console.log ("One")

    setTimeout(()=>{
        console.log ("After 2 seconds")
    }, 2000)
}
function Two (){ //callback function
    console.log ("I am a callback function")
}
One(Two) //when one function is pass in argument then the argument function is called callback function
Two()

//Another example

let items = [
    {name:"bread", price: 100},
    {name:"eggs", price: 200},
    {name:"Dahi", price: 50}
]

function Items (cb:()=> void){
    console.log ("Fetching lists....")

    setTimeout(()=> {
        cb()
    }, 2000)
}

let shopping = () =>{
    console.log(items)
}

Items(shopping)

/*
//Synchronous code
- The code that runs line by line is called synchronous code.



There are two Queue's
1- CallStack
2- Callback Queue's


//Asynchronous code
1) The code which is not directly enterned into callstack is called Async Code.

2) Async is directly entered into webapi like settimeoute and then it goes to callbackstack and then 
with the help of event loop it is sent to the callstack.   

3) Async code is sent to callback Queue because it will stop the execution of the entire program. That's why it is 
sent to callback queue. 
*/