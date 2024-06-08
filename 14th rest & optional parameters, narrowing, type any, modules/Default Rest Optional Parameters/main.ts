//=========================================================== REST PARAMETER =============================================================//
//A rest parameter allows us to pass zero or any number of arguments of the specified type to a function. 
//In the function definition where we specify function parameters rest of the parameters should always come at last or the typescript compiler will raise errors.
//when you have unlimited no of arguments //used in function
//rest parameter alway apply at the end of argument
//rest parameter always write in array
//email attachements is the example of it
function Wallet (color:string, ... others:string[]){
    console.log(color);
    console.log(color, others);
    console.log(others);    
}
Wallet("red", "currency", "money", "credit card", "NIC")

//Another example
function fileUpload (file:string, ...files:string[]){
    console.log(file);
    console.log(files);
    console.log(file, files);
    
}
fileUpload ("A1", "B1", "C1", "D1")

//Another example
function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

//another example
//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}
console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
//=========================================================== OPTIONAL PARAMETER =============================================================//
//In TypeScript, optional parameters allow you to specify that a function parameter may be omitted when calling the function. 
//You denote optional parameters by adding a question mark ( ? ) after the parameter name in the function declaration.
//you can or cant assign value in it

function Form (name:string, feedback?:string) {
    console.log(name, feedback);
}
Form ("Ali")
Form ("Ali", )
Form ("Ali", "Good Class")

//Another example
interface product {
    name:string
    product : {
        ProductName:string
        Price?:number
    }
}
let product:product = {
    name:"Ali",
    product:{
        ProductName:"Mobile"
    }
}
console.log(product);

//Another example
//Named function with optional parameters
function builderName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = builderName("Bob");  //ok
//let result2 = builderName("Bob", "Adams", "Sr.");  //error, too many parameters
let result3 = builderName("Bob", "Adams");  //also ok
console.log(result1);
console.log(result3);
console.log(builderName); // function will show in console


//anonymous function type with optional parameters
var buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
