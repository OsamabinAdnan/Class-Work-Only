//Union types are used when a value can be more than a single type.
//Such as when a property would be string or number. ==> tu define multiple data types to same variable
//The type can be declared with a pipe |.
//we can give more than 2 data type like let today : string | number | boolean
//=================== number | string (simple) ========================================(1)======================================
let rollNumber : number | string = 1124
console.log(rollNumber);
rollNumber = "1124"
console.log(rollNumber);
//=================== number | string (complex) ========================================(2)======================================
let studentName : string | number = "Osama bin Adnan"
console.log(studentName);
studentName = 123
console.log(studentName);
//=================== boolean | string (complex) =======================================(3)======================================
let isPresent : string | boolean = "Present"
if (isPresent = "Present"){
    console.log (true)
} else{
    console.log (false)
}
//=================== boolean | string (complex) =======================================(4)======================================
let today : string | boolean
today = "Sunday";
console.log(today)
today = false
console.log(today)
//=================== number | string (function) =======================================(4)======================================
function printStatusCode (code:string | number){
    console.log (`"My status code is ${code}"`)
}
printStatusCode ("404")
printStatusCode (404)
