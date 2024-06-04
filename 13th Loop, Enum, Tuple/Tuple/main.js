let empData = [
    [45, "Osama", 55000, "10 years"],
    [11, "Ali", 60000, "5 years"],
    [65, "Ahmed", 564646, "25 years"]
];
console.log(empData);
console.log(empData[0][1]);
console.log(empData[1][1]);
console.log(empData[2][1]);
for (let employee of empData) {
    console.log(employee);
}
export {};
/*
or
you can also write below instead if for of loop
console.log (empData[0],empData[1],empData [2])
*/ 
