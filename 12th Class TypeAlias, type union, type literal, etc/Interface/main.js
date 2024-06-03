//Interfaces are similar to type aliases, except they only apply to object types. ==> when you want to make object structure then use interface
//When you want to define object only then you use interface
//in interface we dont use '=' sign
//type alias can be used for primitive and non primitive data type (string, number, boolean, function and objects) and union type
//interface only used for object type ==> structural formatting
let myName = {
    name: "Osama bin Adnan",
    age: 35
};
console.log(myName);
let bill = {
    customerName: "Osama bin Adnan",
    billNo: "AZ5641546",
    timestamp: "12:56 PM",
    product: {
        productName: "Ketup",
        price: "PKR 999"
    }
};
console.log(bill);
console.log(bill.customerName);
console.log(bill.billNo);
console.log(bill.timestamp);
console.log(bill.product.productName);
console.log(bill.product.price);
export {};
