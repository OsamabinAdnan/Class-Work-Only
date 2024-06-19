//The key difference between synchronous and asynchronous communication is synchronous communications are scheduled, real-time interactions by phone, video, or in-person.
//Asynchronous communication happens on your own time and doesn't need scheduling.
//Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. 
//Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it. Each task requires an answer before moving on to the next iteration.
//Synchronous means to do any work in sequence
//Synchronous
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");
console.log("Five");
//Asynchronous
function hello() {
    console.log("Hello Osama!");
}
console.log("Hello1");
setTimeout(hello, 4000); //1000 ms is = to 1 seconds
console.log("Hello2");
//CallBack function
//A JavaScript callback is a function which is to be executed after another function has finished execution. 
//A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
/*
This concept is very important in front end development
In interview, lot of questions has been asked from this topic
Sync code run line by line, straight forward execution, till now we are doing this type of programming from day 01
Async code execute will little delay
JS execute code instantly but if it found such code which exceute will delay, JS will not wait
Taking attendance at Governor house is the example of synchoronous
If async code is present in between sync code then all executions after async code will be stopped
for example, student finding IT card for attendance and line stopped due to this.

*/
//Call Stack
/*
Sync code will go in call stack in order to run it

// Callback queue
Async code will go in callback queue | The Callback Queue is a mechanism used by the JavaScript runtime to handle asynchronous tasks.
Callback syntax
==> it is a function you can used it for normal and arrow function
==> When one function is pass in argument of other function then that argument called callback function
function one (cb:()=> void) {} //callback function
cb type is function and we can used callback instead of cb
*/
function one(cb) {
    console.log("One");
}
function two() {
    console.log("Two");
}
one(two); // when we pass function as an argument we dont need round bracker i.e., one (two())
/*
JS builtin function settimeout, in which you give milliseconds to describe how much delay should it take to execute
*/
function one1(cb) {
    console.log("One");
    setTimeout(() => {
        console.log("After 2 seconds");
        cb();
    }, 2000);
    console.log("3");
}
function two2() {
    console.log("I am Callback");
}
one1(two2);
//if you have created tsconfig file then you have to assign callback function types i.e., cb:() => void
//When web application become complex, it means no of callback functions increases
//Callback hell => concept of promise
//Callback hell is a phenomenon where a Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function. 
//If you look at the design of the code, it seems just like a pyramid. Thus the Callback hell is also referred to as the 'Pyramid of Doom'.
function Myfun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am resolved");
        }, 2000);
    });
    Myfun().then((resolve) => {
        console.log(resolve);
    });
}
//myfun.then ==> resolve msg
//myfun.catch ==> reject msg
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//Using `then`, `catch`, and `finally`:
delay(1000)
    .then(() => {
    console.log('The delay is over');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
})
    .finally(() => {
    console.log('This is always executed');
});
export {};
