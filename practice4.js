//1.print student avg marks

// marks = [86, 89, 35, 78, 68, 67];
// let sum = 0;
// for (let val of marks) {
//     // console.log(val);
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// // console.log(sum);
// console.log(`avg is: ${avg}`);


//2.for a given array with price of 5 items=[250,650,300,900,50]all items have an offer
// of 10% off on them . change the array to store final price after appling offer.

//using for of
// let items = [250, 650, 300, 900, 50];
// let i = 0;
// for (let val of items) {
//     // console.log(`value at index $[i]=${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer=${items[i]}`);
//     i++;
// }


//using for loop

// let items = [250, 650, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
// }
// console.log(items);

//methods in arrays
//1.push-add
// let fooditems = ["potatao", "apple", "litchi", "tomato"];
// // fooditems.push("chips"); //chips add in the end
// // console.log(fooditems);   //['potatao', 'apple', 'litchi', 'tomato', 'chips']
// fooditems.push("panner", "burger","chips");
// console.log(fooditems);

//2.pop -delete
// let fooditems = ["potatao", "apple", "litchi", "tomato"];
// console.log(fooditems);
// fooditems.pop();  //last item deleeted
// console.log(fooditems);  //['potatao', 'apple', 'litchi']

//3.toString()-conver array to string
// let fooditems = ["potatao", "apple", "litchi", "tomato"];
// console.log(fooditems);
// console.log(fooditems.toString());  //string-potatao,apple,litchi,tomato


