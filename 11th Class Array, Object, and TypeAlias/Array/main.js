let fruits = ["Mango", "Apple", "Banana", "Orange"];
console.log(fruits);
//to access the specific index in array
console.log(fruits[3]);
//to access the index which is not define in array
console.log(fruits[33]);
//to change the element in array on specific index
fruits[3] = "Kiwi";
console.log(fruits);
// pop() is used to remove last element in array, suppose we have 3 element (0 to 2 index) in array, if we run pop() function 3 times, it will return empty array.
fruits.pop();
console.log(fruits);
//push() is used to add element at the end of array | we can add 1 or more than 1 element in array by using push function
fruits.push("Grapes", "Orange");
console.log(fruits);
//shift() is used to remove first element in array, suppose we have 3 element (0 to 2 index) in array, if we run shift() function 3 times, it will return empty array.
fruits.shift();
console.log(fruits);
//unshift() is used to add element at the start of array | we can add 1 or more than 1 element in array by using unshift function
fruits.unshift("Mango", "Peach");
console.log(fruits);
//slice() is used to slice the array | it will return the sliced array | slice make new array without distrubing main array
// first parameter is starting index (included), second parameter is ending index (excluded)
// second parameter is not mandatory | here we give 4 as second parameter which is excluded | if we give 0 as a starting point then whole array will print as a result.
//slice(1,0) ==> logically not possible
//slice(-2) & //slice(-2, 2) ==> logically possible
let sliceArray = fruits.slice(1, 4);
console.log(sliceArray);
console.log(fruits);
//splice() is used to remove element from array | it will return the removed element | splice make new array without distrubing main array
// first parameter is starting index (included), second parameter is number of element to be removed
// positive indexing start from 0, negative indexing start from -1
let spliceArray = fruits.splice(1, 2, "Strewberry", "Apricot", "Cherry");
//remove elements in b/w array and add new elements in place of removed elements
//fruit.splice (0,0, "banana", "peach") ==> start from zero index nothing will delete but add new elements in array from zero index
//fruit.splice (3,0, "banana", "peach") ==> start from zero index nothing will delete but add new elements in array from 3rd index
console.log(spliceArray);
console.log(fruits);
export {};
