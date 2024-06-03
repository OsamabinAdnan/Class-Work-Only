//======================================== Without type assignment =================(1)=============================================
let myCar = {
    name: "Toyota",
    model: "Camry",
    year: 2024,
    color: "Red",
    variant: "1800 cc"
};
console.log(myCar);
//======================================== With type assignment ====================(2)=============================================
let car = {
    name: "Toyota",
    model: "Corolla",
    year: 2024,
    color: "Black",
    variant: "1600 cc",
    isAC: () => true
};
console.log(car);
//if 1 value we want to return in arrow fucntion then we dont need {} and return. see isAC: () => boolean, check the different between car object answer and console.log(car.isAC()) answer
// function will not show in CLI like this
console.log(car.name);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.variant);
console.log(car.isAC());
//check another example
let cars = {
    maker: "Honda",
    model: 2024,
    variant: "1800 cc",
    maxspeed: () => 220
};
console.log(cars); //function will not show in CLI like this
console.log(cars.maker);
console.log(cars.model);
console.log(cars.variant);
console.log(cars.maxspeed());
let yourCar = {
    maker: "Honda",
    model: 2024,
    variant: "1800 cc",
    maxspeed: () => 220,
    isAC: () => true,
    color: ["Red", "Blue", "Black", "White"]
};
console.log(yourCar);
console.log(yourCar.maker);
console.log(yourCar.model);
console.log(yourCar.variant);
console.log(yourCar.maxspeed());
console.log(yourCar.isAC());
console.log(yourCar.color[2]);
export {};
