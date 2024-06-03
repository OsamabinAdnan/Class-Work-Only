//object with in object
let bill = {
    customerName: "Ali",
    product: {
        productName: "Bread",
        price:100
    }
}
console.log (bill.product.productName)

//Another example with type assignment
type slip = {
    customer:string
    product: {
        productName:string
        price:number
    }
}
let finalbill:slip ={
    customer:"Osama",
    product:{
        productName : "Biscuit",
        price: 40
    }
}
console.log(finalbill.product.price)

//Typescript can assign data type to primative data but cant assign to complicated data.
