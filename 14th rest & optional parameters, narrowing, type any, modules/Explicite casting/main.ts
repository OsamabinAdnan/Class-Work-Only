//Type casting is a feature in TypeScript that allows developers to explicitly change the type of a value from one type to another. 
//Type casting is particularly useful when you're working with dynamic data, or when the type of a value is not correctly inferred automatically.

let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)

//casting (data type)
let value:unknown ="Osama bin Adnan"
console.log (
    (value as string).length,
    (value as string).toUpperCase(),
    (value as string).toLocaleLowerCase()
)

