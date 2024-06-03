//An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.
//To combine types, you use the & operator as follows
//if you have multiple object types, we can combine these object into 1 object, that is type intersection
type student = {
    studentname: string
    studentRollno:number
}
type teacher = {
    teachername: string
    teacherexperience: string | number
}
type classRoom = student & teacher
let Classroom: classRoom = {    // we can also write ==> let Classroom : student & teacher instead of let Classroom : classroom
    //means doesnt need to make classroom alias, we can also write above line to start making mergered object.
    studentname: "Osama bin Adnan",
    studentRollno: 262437,
    teachername: "Ali Jawad",
    teacherexperience: "5 years"
}
console.log (Classroom)
//our goal is to make single object which is called type insertion

type employee = {
    employeeName: string
    employeeExperience: string | number
}
type manager = {
    managerName: string
    managerExperience: string | number
}
type Office = employee & manager
let office : Office = {
    employeeName : "Osama bin Adnan",
    employeeExperience: "10 years",
    managerName : "Hasan",
    managerExperience : "20 years"
}
console.log(office)
console.log(office.employeeName)
console.log(office.employeeExperience)
console.log(office.managerName)
console.log(office.managerExperience)
