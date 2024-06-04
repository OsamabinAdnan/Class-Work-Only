/*
A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
When you need sequential value on array we use tuple
Suppose we want to add data in this way ==> ID, Name, Salary, experience
*/
type dataBase = [number, string, number, string]
let empData : dataBase [] =[
     [45, "Osama", 55000, "10 years"],
     [11, "Ali", 60000, "5 years"],
     [65, "Ahmed", 564646, "25 years"]  
]
console.log (empData)
console.log(empData[0][1])
console.log(empData[1][1])
console.log(empData[2][1])

for (let employee of empData){
    console.log (employee)
}
/*
or 
you can also write below instead if for of loop
console.log (empData[0],empData[1],empData [2])
*/