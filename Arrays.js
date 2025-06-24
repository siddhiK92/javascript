// let marks = [97, 77, 55, 49, 22];
// console.log(marks);
// console.log(marks.length);  //property

// let heroes = ["ironman", "thor", "spiderman", "shaktiman", "hulk"];
// console.log(heroes);   

//array indices

// marks = [97, 82, 75, 64, 36];
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[5]);  //undefine

//index value change
// marks[2] = 71;
// console.log(marks);  //change value

//looping in array
// let heroes = ["ironman", "thor", "spiderman", "shaktiman", "hulk"];
// for (let i = 0; i <= heroes.length; i++) {
//     console.log(heroes[i]);
// }

//for of
// let heroes = ["ironman", "thor", "spiderman", "shaktiman", "hulk"];
// for (let hero of heroes) {
//     console.log(hero);
// }

// let cities = ["maharashtra", "delhi", "pune", "mumbai", "hydrabad"];
// for (let city of cities) {
//     console.log(city);
//     console.log(city.toUpperCase());
// }


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



//concat()-
// let mavrelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let heroes = mavrelHeroes.concat(dcHeroes);
// console.log(heroes);

//unshift- add to start
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);  //['antman', 'thor', 'spiderman', 'ironman']


//shift-delete from start
// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let val = marvelHeroes.shift();
// console.log("deleted", val)
// console.log(marvelHeroes);// ['spiderman', 'ironman']

//slice-
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "dr.stranger"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));

// splice()-change eriginaal array
let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);
// console.log(arr);  // [1, 2, 101, 102, 5,6,7]   

//add element
// arr.splice(2, 0, 101);

//delete element
// arr.splice(3, 1);

//replace Element
arr.slice(3, 1, 101);
