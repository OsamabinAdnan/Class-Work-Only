
// apply all comparison operators in below code
let a:number = 9;
let b:number = 8;
console.log (a==b);
console.log (a!=b);
console.log (a>b);
console.log (a<b);
console.log (a>=b);
console.log (a<=b);
//now we change the value
let a$:number = 9;
let b$:number = 9;
let c$:string = "9";
let d$:string ="Ali";
let e$:string ="ali";
console.log (a$==b$);
console.log (a$!=b$);
console.log (a$>b$);
console.log (a$<b$);
console.log (a$>=b$);
console.log (a$<=b$);
//now we compare number with string, it is giving error that comparison appears to be unintentional
//@ts-ignore
console.log (a$ === c$);
// now compare string with string
console.log (d$===e$);
// now compare string with boolean
let f$:string ="true";
let g$:boolean =true;
//@ts-ignore
console.log(f$===g$);

let age = 17.99
let cnic = 18
console.log(age>=cnic);

