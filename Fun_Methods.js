//Functions in js
//block of code that performs a specific task, can be invoked whenever needed.
//invokd means call


// console.log("hello");
// a = "abc".toUpperCase();
// console.log(a);
// b = [1, 2, 3].push(4);
// console.log(b);

//function defination
// function myFunction() {
//     console.log("welcome , i'm siddhi");
//     console.log("i'm learning js :)");
// }
// myFunction(); //function call
// myFunction();


// //single argument
// function myFunction(msg) { //()-parameter->input
//     console.log(msg);
// }
// myFunction("Hello, i'm siddhi")  //argument

//multiple
// function myFunction(msg, n) { //()-parameter->input
//     console.log(msg * n);
// }
// //nan-not a number
// myFunction("Hello, i'm siddhi", 100)  //argument

//sum of 2 nos
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(10, 15);


//return keyword
// function sum(x, y) {  // x,y- act as local variable->scope
//     s = x + y;
//     console.log("before return");
//     return s; //end
//     console.log("after return");
// }
// let val = sum(3, 4);
// console.log(x); //not printing
// console.log(val);



//Arrow functions
//sum function
// function sum(a, b) {
//     return a + b;
// }
// const x = 5; //5




//Modern js-of sum
// const ArrowSum = (a, b) => {
//     console.log(a + b); // ArrowSum()- print ho jayega
// };




//multiplication function
// function mul(a, b) {
//     return a * b;
// }

// const ArrowMul = (a, b) => {  //const ArrowMul-arrow fun value store here
//     console.log(a * b);
// };

//output-ArrowMul
// (a, b) => {
//     console.log(a * b);
// }
// ArrowMul(3,4);
//  12

//this is how array function work
// let ArrowMul = (a, b) => {  //const ArrowMul-arrow fun value store here
//     console.log(a * b);
// };
// ArrowMul = 5;


// const printHello = () => {
//     console.log("hello");
// };
// const printHello = () => console.log("hello"); //printHello-hello


//Map method --new array returns
// let nums = [23, 45, 67];
// nums.map((val) => {
//     console.log(val);
// });
// let calSquare = (num) => {
//     console.log(num * num);
// };


// let nums = [23, 45, 67];
// let newArr = nums.map((val) => {
//     return val * 2;

// });
// console.log(newArr);
// let calSquare = (num) => {
//     console.log(num * num);
// };


//filter

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });
// console.log(evenArr);

//reduce
let arr = [5, 6, 7, 8, 9, 90];
const output = arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
});
console.log(output);
