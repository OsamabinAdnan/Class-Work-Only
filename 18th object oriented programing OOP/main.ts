/*Object-Oriented Programming (OOP) is a programming paradigm centered around objects and classes. 
It organizes code into reusable, self-contained modules that model real-world entities, making it easier to design, manage, and maintain complex software systems.
till now we are doing functional programming
OOP is a paradigm of all programming JS, Java, C+, C sharp etc.
Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of "objects," which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods). 
OOP emphasizes the principles of encapsulation, inheritance, and polymorphism. 
OOP enhances code modularity, readability, and maintainability.
                                                ================Pillars of OOP================
1) Encapsulation:
Bundles data (attributes) and methods (functions) that operate on the data into a single unit called a class.
Controls access to the data and protects it from unauthorized modifications using access modifiers (public, private, protected).
Encapsulation involves bundling the data and methods that operate on the data within a single unit or class.

2) Abstraction:
Simplifies complex systems by providing a clear, simplified interface while hiding the complex implementation details.
Allows focusing on interactions at a higher level without needing to understand the underlying workings.

3)Inheritance:
Allows a new class (subclass) to inherit attributes and methods from an existing class (superclass), promoting code reuse.
Supports hierarchical relationships and enables the creation of a more specific class based on a general one.
Inheritance allows new classes to inherit properties and methods from existing ones, promoting code reuse.

4)Polymorphism:
Enables objects of different classes to be treated as objects of a common superclass.
Supports method overriding and method overloading, allowing for flexible and dynamic method calls based on the object's actual class.
Polymorphism enables methods to process objects differently based on their data type or class.

5) Classes:
Organizes code into reusable, self-contained modules.
Helps in better organization and maintainability of large and complex software systems.
It is defining of the blue print ==> Classes used to make object, Classes name should be capital letter
Variable in classes are called class properties or fields

6) Object:
Instances of classes are known as objects. Each object has its own state and behavior defined by the class.

*/
//====================================================== CLASSES ======================================================
class Animal {
  name: string;
  age: number = 35;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  /*We have a feature of contructor, it is a class function in which you can define parameter
Syntax contructor () {
}
class properties and contructor parameter could have same names
Whenever we want to use class properties then we use "this" KW
"new" KW is used to make object and call contructor function as well in argument
Class properties are not fix but change due to the introduction of contructor | for example const P1 = new Person ("Ahmed", 30)
*/
  speaks(): void {
    console.log(`${this.name} makes a noise.`);
  }
  walk(canWalk: string) {
    console.log(`${this.name} is ${canWalk}`);
    return canWalk
  }
}
let Dog = new Animal("Buddy", 5);
Dog.speaks ();

let Cat = new Animal ("Kitten", 50)
Cat.walk("Walking")

//Another program
// Base class and Obj without constructor

class Car {
  name: string = "Honda"
  model:number = 2024
  variant:string = "Civic 1500 CC Turbo"
}
//creating an object
let car = new Car ()
console.log (car.name);

class MyCar {
  name:string
  price:string
 // A constructor function is a class function responsible for initializing a class’s instance variables.
  constructor (n:string, p:string){
    this.name = n
    this.price = p
  }
  getCarDetail (){
    return `${this.name} is of price ${this.price}`
    console.log(this.getCarDetail);
    
  }
}
let myCar = new MyCar ("Honda", "15 Million")
console.log(myCar);
console.log(myCar.name);
console.log(myCar.price);
console.log(myCar.getCarDetail());

//Another Program
class Student {
  name: string;
  timing: string | number;

  constructor (n:string, t:string){
    this.name = n
    this.timing = t
  }
  printDetail (){
    return `My name is ${this.name} and my timing is ${this.timing}` 
  }
}

const student = new Student("Osama bin Adnan", "Wednesday 2 to 5") //Instance member | Class instance "new" has 2 work 1)call contructor function 2)make object of class
console.log(student.printDetail());

//Constructor used to make class dynamic
//"this" give reference to class property from constructor parameter

//====================================================== Inheritance ======================================================

class Person {            // Parent class, super class, base class
  fullName:string
  age: number

  constructor (fn:string, a:number){
    this.fullName = fn
    this.age = a
  }
}

class Students extends Person {   //child class

  constructor (F:string, A:number){
    super(F,A)                      //if you want to access parent class properties in child class, you will use super KW in construction
  }
}
const S = new Students ("Osama bin Adnan", 35)
console.log(S);

//Another example
class Employer {
  name:string
  salaryAmount:number

  constructor(name:string,salaryAmount:number){
    this.name=name
    this.salaryAmount =salaryAmount
  }
}

class Employee extends Employer { position:string

  constructor (name:string, salaryAmount:number, position:string){
    super(name, salaryAmount)
    this.position = position
  }
}
let employee = new Employee ("Osama bin Adnan",55000, "Executive Office")

console.log(employee);
console.log(employee.name);
console.log(employee.position);
console.log(employee.salaryAmount);

//Another program

class Vehicle {
  name:string
  tyres:number
  engine: string | number

  constructor (name:string, tyres:number, engine: string | number){
    this.name = name
    this.tyres = tyres
    this.engine = engine
  }
}

class NewCar extends Vehicle {
  constructor (name:string, tyres:number, engine: string | number){
    super (name,tyres,engine)
  }
}
let newCar = new NewCar ("Revo",4,"2800CC")
console.log(newCar);

class Bike extends Vehicle {
  constructor (name:string, tyres:number, engine: string | number) {
    super (name,tyres,engine)
  }
}
let bike = new Vehicle ("Honda 125",2,"125CC")
console.log(bike);

//Another program
class PersonDetail {
  name:string
  age:number

  constructor (n:string, a:number) {
    this.name = n
    this.age = a
  }
  eat () {
    console.log(`What is for dinner?`);    
  }
  speak () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);    
  }
}

class Engineer extends PersonDetail {
  occupation:string
  constructor (n:string, a:number, o:string){
    super (n,a)
    this.occupation = o
  }
  person () {
    return (`${this.name} has ${this.occupation} and his age is ${this.age}`)
  }
  //Method with parameters
  work (dev:string){
    return `${dev}`
  }
}
let engineer = new Engineer ("Osama", 35,"Digital Marketer")
console.log(engineer.person());

let osama = new Engineer ("Arham", 22 , "Software Engineer")
console.log(engineer.work("Front end developer"));

//====================================================== Encapsulation ======================================================
// Encapsulation is a access modifier 
//1) Public ==> Everything available for outside world
//2) Private ==> Only available where define => like it is only available with the class it define
//3) Protected ==> Not available in outside world | Available in Parent and child classes only


class Bank {
  private balance: number
  public customerName: string
  protected accountNumber: number

  constructor(balance: number, customerName: string, ac: number) {
      this.balance = balance
      this.customerName = customerName
      this.accountNumber = ac
  }

  getBalance() {      //get function use in private property | to call function, you will treat it as variable, not function, so no () will use | // set function is use to update property (here bank balance)
      return this.balance
  }
}
let bank = new Bank(500, "Ali Jawwad", 10)
// bank.balance = 120 // Error
console.log(bank);


// Protected
class MeezanBank extends Bank {

  constructor(balance: number, customerName: string, ac: number) {
      super(balance, customerName, ac)
      this.customerName = customerName
      this.accountNumber = ac
  }
}
let mzb = new MeezanBank(50000, "John Doe", 1000)