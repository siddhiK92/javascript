//loops-

//1.print all even / odd number from 0 to 100
// let n;
// for (let n = 0; n <= 100; n++) {
//     // if (n % 2 == 0) {//even
//     if (n % 2 !== 0) {  //odd
//         console.log("num:", n);
//     }
// }

//2.gessing number game
// let gameNum = 24; //number in string
// let userNum = prompt("guess the game number:");
// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong number.guess again:");
// }
// console.log("congratulations,you enter thee right numbeer");


//3.username="siddhikawade",username should be "@siddhikawade"

let fullName = prompt("Enter your name without space:");
let username = "@" + fullName;
console.log(username);