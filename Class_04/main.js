
//Prefix unary operators
let a = 6;
let b = 8;
let c = ++a + ++b;
let d = ++a + ++a;
let e = ++b + ++b;
let f = --a + --b;
let g = --a + --a;
let h = --b + --b;
console.log (c);
console.log (d);
console.log (e);
console.log (f);
console.log (g);
console.log (h);

//Postfix unary operator
let a1 = 6;
let b1 = 8;
let c1 = a++ + b++;
let d1 = a++ + a++;
let e1 = b++ + b++;
let f1 = a-- + b--;
let g1 = a-- + a--;
let h1 = b-- + b--;
console.log (c1);
console.log (d1);
console.log (e1);
console.log (f1);
console.log (g1);
console.log (h1);

//combination of both prefix and postfix
let a2 = 6;
let b2 = 8;
let c2 = a2++ + --b2 - --a2
console.log(c2);
console.log (b2 = b2++);
console.log(a2 = ++a2);
console.log(a2 = a2--)

