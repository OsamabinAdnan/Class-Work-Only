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
enum Direction {
    north,
    south,
    east,
    west
}
console.log(Direction.east); 
console.log(Direction[2]); // to approach index
//enum is not array but it has index
enum path {
    north = "North",
    south =  "South",
    east = "East",
    west = "West"
}
console.log(path.west); //to approach value
console.log(path);
//Another example
enum timezone {
    Morning = "9-12",
    Afternoon = "2-5",
    Evening = "7-10",
    PhoneNumber = 923021234567
}
console.log(timezone.PhoneNumber);
console.log(timezone.Afternoon);
//if phone # starts with 0 like 0923021234567 then error receive b/c of zero
//if you want to access enum by indexing then you should not assign value in enum, otherwise you cant access it