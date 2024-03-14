// And (&&) logical operator, all conditions should be true in order to get true result in console
let a =10;
let b = 20;
let c = 5;
console.log((a<b)&&(a>c));//true
a= 10;
b= 20;
c =11;
console.log((a<b)&&(a>c));//false
console.log ((a<b)&&(b>c)&&(c>a));//true

// Or (||) logical operator, atleast one condition should be true in order to get true result in console
a= 10;
b= 20;
c =11;
console.log((a<b)||(a>c));//true
console.log((a>b)||(b<c)||(c<a)) //false

//Not (!) operator, whatever the answer of operator, not operator opposite the answer of specific logic
a= 10;
b= 20;
c =11;
console.log(!(a>b));//true
console.log(!(b>c));//false
console.log(!(c>a));//false


