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


//3.for given array  calculate square
let nums = [2, 3, 4, 5, 6];
nums.forEach((num) => {
    console.log(num * num);
});