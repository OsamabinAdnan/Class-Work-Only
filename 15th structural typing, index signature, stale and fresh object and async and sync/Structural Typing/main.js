"use strict";
let ball = {
    diameter: 10
};
let sphere = {
    diameter: 20
};
sphere = ball;
ball = sphere;
let tube = {
    diameter: 12,
    length: 3
};
//tube = ball;//Error
ball = tube;
;
let tubes = {
    diameter: 12,
    length: 3
};
//tubes = ball; error length missing
ball = tubes; //OK, no error
//LHS = RHS
// if RHS has same or more properties then LHS then it is OK program will run but RHS has less properties then LHS then error will come
//RHS should have more properties than LHS
// Now lets do it Case By Case
//=============================================== Index Signature | Stale and Fresh object ===============================================//
//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost. 
let myType = { name: "Zia", id: 1 };
//Case 1
myType = { id: 2, name: "Tom" }; //Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type
//Case 2a
//myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property
//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
//An index signature is a way to define the Shape of fields which are not known ahead of time. 
//The [key: string]: number; is the index signature, which indicates to TypeScript that any fields on the object which are not mentioned will be a particular types.
//if we want to make data type as dynamic in object then we use index signature
var x; //Note now 'x' can have any name, just that the property should be of type string
x = { id: 1, fullname: "Zia" }; // Ok, `fullname` matched by index signature
//Case 3
//myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property
//=================================================
//Case when STALE object literal are assigned to a variable 
let myType2 = { id: 2, name: "Tom" };
//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object
let myType3 = { id: 2, name_person: "Tom" };
//Case 2a
//myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
var x; //Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y; // Ok, `fullname` matched by index signature
var myType4 = { id: 2, name: "Tom", age: 22 };
//Case 3
myType = myType4; //Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
/*
var x: { foo: number };
x = { foo: 1, baz: 2 };  // Error, excess property `baz`

var y: { foo: number, bar?: number };
y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`



var a: { foo: number };
var a1 = { foo: 1, baz: 2 };
a = a1;//No Error

var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error
*/
