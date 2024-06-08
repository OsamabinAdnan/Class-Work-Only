let myval;
myval = true; // Boolean OK 
myval = 42; // Number OK
myval = "hey!"; // String OK
myval = []; // Array OK
myval = {}; // Object OK
myval = Math.random; // narrowing number function OK
myval = null; // Null OK
myval = undefined; // Undefined OK
myval = () => { console.log('Hey again!'); }; // Arrow function OK
//You can write any or "unknown"
//sir recommended to use unknown instead of any
//unknown is safer than any
let val;
let val1 = val;
//when 2 value types are unknown then we can assign 1 value to other, see above
let val2 = val;
export {};
//Any is also compatible with unknown see above
//and unknow is capable with unknow
//unknown = unknown ==> OK
//any = unknow  ==> OK
//let val3: string | number = val ==> //Error
