//1.create a function using "function " keyword that takes a string as an argument & returns the number of vowels in the string

// function countvowel(str) {
//     //"ApnaCollege",count=1
//     let count = 0;
//     for (const char of str) {
//         // console.log(char);//print each character of the string

//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     // console.log(count);
//     return count;
// }



//2.create an arrow fun to perform the same task

// const countvow = (str) => {
//     let count = 0;
//     for (const char of str) {

//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }

//     return count;

// }


//3.for given array of numbers,print the square of each value using the forEach loop
// 1.
// let nums = [2, 3, 4, 5, 6];
// nums.forEach((num) => {
//     console.log(num * num); //num**2
// });

//2.
// let nums = [67, 23, 45];
// let calSquare = (num) => {
//     console.log(num * num);
// };
// nums.forEach(calSquare);


//4.we are given array of marks of students.filter ut of the marks of students that scored 90+.
// let marks = [94, 76, 45, 98, 67, 90, 95];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);

//5. take a number n as input from useer .create an array of nos from 1 to n.
