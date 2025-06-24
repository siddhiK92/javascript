//String

// let str = "Apna college";
// let str2 = 'siddhiKawade';
// console.log(str);
// console.log(str2.length);//12
// console.log(str[1]);//p



//Template Literals- ` `
// let specialString=`this is template literals`;
// console.log(typeof specialString);


// let obj = {
//     item: "Pen",
//     price: 10,
// };
// console.log("the cost of", obj.item, "is", obj.price, "rupess");
// let obj2 = `the cost of ${obj.item} is ${obj.price} rupees`;  //Template litrals
// console.log(obj2);


// console.log("Apna \n College");  //  \n - next line
// console.log("Apna \t College");  // \t - tab
// let str = "Apna\tCollege"; //12
// console.log(str.length)



// //string Method
// let str = 'Apna college';
// console.log(str.toUpperCase());//Uppercase
// console.log(str.toLowerCase());//Lowercase
// let newstr=str.toUpperCase();
// console.log(str);
// console.log(newstr);

// let str2 = '        Apna college  js     ';
// console.log(str2.trim());


//str.slice
// let str = "0123456";
// console.log(str.slice(1, 6));  //12 

// let str2 = "hello";
// console.log(str2.slice(0, 3)); //hel


//str.concat
// let str1 = "siddhi";
// let str2 = "kawade";
// let result = str1.concat(str2);  //siddhikawade
// let result = "I am " + str1 + str2;
// console.log(result)


// str.replace
// let str1 = "hello";
// console.log(str1.replace("h", "y"));  //yello
// console.log(str1.replace("lo", "p")); //help


//str.charAt(idx)
let str = "ILoveJS";  //original string immutable so can not be changed
// console.log(str.charAt(4));  //e

str[0] = "S";
// console.log(str);//Slovejs-immutable
str = str.replace("I", "S");
console.log(str); //Slovejs