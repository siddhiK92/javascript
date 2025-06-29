// let person1="siddhi";
// let age1=20;
// let gender1="female";

// let person2="sid";
// let age2=23;
// let gender2="male";


// let person1="siddhi";
// let person2="sid";
// let person3="kiran";
// const personArray=["siddhi","sid","kiran"];
// console.log(personArray[0])
// console.log(personArray[1])
// console.log(personArray[2])




// Q1. WAP to print all the even nos in an Array.
// const age=[221,22,23,24,25];;
// for(let i=0;i<=age.length;i++){
//     if(age[i]%2==0){
//         console.log(age[i]); //22 24
//     }
// }

//WAP to print the biggest no in an array.

//WAP to print that all the male people's first name given a complex object.
// const personArray=["siddhi","ram","sham"];
// const genderArray=["female","male","male"];
// const numberOfUsers=personArray.length;
// for(let i=0;i<numberOfUsers;i++){
//     if(genderArray[i]=="male"){
//         console.log(personArray[i]);
//     }
// }

//object
// const user1={
//     firstname:"siddhi",
//     gender:"female"
// }
// console.log(user1["firstname"])

//Array
// const value=[1,2,3,4];
// console.log(value[0]);

//ArrayString
// const allusers=[{
//     firstname:"siddhi",
//     gender:"female"
// },{
//     firstname:"ram",
//     gender:"male"
// },{
//     firstname:"harish",
//     gender:"male"
// }]
// for(let i=0;i<allusers.length;i++){
//     if(allusers[i]["gender"]=="male"){
//         console.log(allusers[i]["firstname"])
//     }
// }

//siddhi.name
//siddhi["name"] //both are same 



// function sum(n1,n2){
//     let result=n1+n2;
//     return result;

// }
// function displayresult(data){
//     console.log("result of the sum is: "+data);

// }
// function displayresultPassive(data){
//     console.log("sum result is: " +data);
// }
// const ans=sum(1,2);
// displayresult(ans);



function sum(n1,n2,fnToCall){
    let result=n1+n2;
    fnToCall (result);
    
}
function displayresult(data){
    console.log("result of the sum is: "+data);

}
function displayresultPassive(data){
    console.log("sum result is: " +data);
}

//you are only allowed to call one function after this
//how will you displayresult of a sum
const ans=sum(1,2,displayresult);
//callback