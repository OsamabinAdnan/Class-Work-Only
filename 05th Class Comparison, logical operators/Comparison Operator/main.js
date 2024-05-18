// apply all comparison operators in below code
var a = 9;
var b = 8;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
//now we change the value
var a$ = 9;
var b$ = 9;
var c$ = "9";
var d$ = "Ali";
var e$ = "ali";
console.log(a$ == b$);
console.log(a$ != b$);
console.log(a$ > b$);
console.log(a$ < b$);
console.log(a$ >= b$);
console.log(a$ <= b$);
//now we compare number with string, it is giving error that comparison appears to be unintentional
//@ts-ignore
console.log(a$ === c$);
// now compare string with string
console.log(d$ === e$);
// now compare string with boolean
var f$ = "true";
var g$ = true;
//@ts-ignore
console.log(f$ === g$);
var age = 17.99;
var cnic = 18;
console.log(age >= cnic);
