//An enum is a special "class" that represents a group of constants (unchangeable variables). you can write predefine values in enum
//Enums come in two flavors string and numeric.
/*enum syntax
enum  {
    member1,
    member2,
    member3
}
numeric enum
*/
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["south"] = 1] = "south";
    Direction[Direction["east"] = 2] = "east";
    Direction[Direction["west"] = 3] = "west";
})(Direction || (Direction = {}));
console.log(Direction.east);
console.log(Direction[2]); // to approach index
//enum is not array but it has index
var path;
(function (path) {
    path["north"] = "North";
    path["south"] = "South";
    path["east"] = "East";
    path["west"] = "West";
})(path || (path = {}));
console.log(path.west); //to approach value
console.log(path);
//Another example
var timezone;
(function (timezone) {
    timezone["Morning"] = "9-12";
    timezone["Afternoon"] = "2-5";
    timezone["Evening"] = "7-10";
    timezone[timezone["PhoneNumber"] = 923021234567] = "PhoneNumber";
})(timezone || (timezone = {}));
console.log(timezone.PhoneNumber);
console.log(timezone.Afternoon);
export {};
//if phone # starts with 0 like 0923021234567 then error receive b/c of zero
//if you want to access enum by indexing then you should not assign value in enum, otherwise you cant access it
