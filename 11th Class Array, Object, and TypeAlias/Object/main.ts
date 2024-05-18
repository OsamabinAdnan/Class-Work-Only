//object has keys and values
//we use it when we want to store data in key value pairs | for well structure data
//Array is unstructure data
//we use it when we want to store data in sequential manner
let myCar = {
    name: "BMW",
    model: "X5",
    year: 2023,
    varient: "SUV",
}
console.log(myCar);
console.log(myCar.name);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar.varient);
//update property value
myCar.year = 2024;
console.log(myCar);
console.log(myCar.year);
//=========================================================================================================================//
let myCar2 = {
    name: "Audi",
    model: "RS e-tron GT",
    year: 2024,
    varient: "Sedan",
    startingPoint: () => {
        return "Starting Point"
    },
    
    maxSpeed: () => {
        return "Max Speed 280 km/h"
    }
}
console.log(myCar2);
console.log(myCar2.startingPoint);
console.log(myCar2.maxSpeed);
//========================================================================================================================//
const student = [
    {
        name: "Osama",
        emailAddress: "osama@gmail.com",
        rollNo: 123456,
    },
    {
        name:"Ali",
        emailAddress: "ali@gmail.com",
        rollNo: 456789,
    },
    {
        name: "Ahmed",
        emailAddress: "ahmed@gmail.com",
        rollNo: 321654,
    },
];
console.log(student[0])
console.log(student)
