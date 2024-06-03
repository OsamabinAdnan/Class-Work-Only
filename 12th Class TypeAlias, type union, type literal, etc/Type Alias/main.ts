//Type Aliases allow defining types with a custom name (an Alias).
//Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
//Type Aliases is a feature of TS, it helps to assign name to primitive data types of TS
//It improve readibility of code.
//=============================== For string and number =================================(1)===================================
type studentName = string
type studentage = number
let StudentName : studentName = "Osama bin Adnan"
let StudentAge : studentage = 35
console.log (`Student name is ${StudentName} and his age is ${StudentAge}`)
//============================== Array ==================================================(2)=====================================
type fruits = string []
let Fruits:fruits = ["Mango", "Banana", "Apple", "Orange", "Peach"]
console.log(Fruits)

//Another example of Array

type chatarpatar=string []
let Chatarpatar:chatarpatar = ["Biscuit", "Chips", "Juice", "Cake"]
console.log(Chatarpatar)
//============================== Boolean Array ==========================================(3)=====================================
type booleanArray = boolean []
let isPresent:booleanArray = [true, false]
console.log(isPresent)
//============================== Object =================================================(4)=====================================
type CarModel = string
type CarYear = number
type CarType = string
type Car = {
    model:CarModel
    year:CarYear
    type:CarType
}
let carModel : CarModel = "Audi"
let carYear : CarYear = 2024
let carType : CarType = "Sedan"
let car: Car = {
    model:carModel,
    year:carYear,
    type: carType
};
console.log(car)



