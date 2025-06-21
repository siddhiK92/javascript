// let age = 5;
// let price = 10.5;  //typeof price = number

// let fulName = "siddhi kawade"; //string

// isFolllow = true;  //boolean

// let x; //undefine

// let y = null;  //null

// let a = BigInt("123");  //BigInt
// let c = Symbol("Hello!");  //symbol

const student = {
    fulName: "siddhi kawade",
    age: 57,
    cgpa: 8.7,
    isPass: true,
};   //object

//find key-value
console.log(student["fulName"]);
console.log(student.fulName);

//update - assign new value to variable
student["age"] = student["age"] + 1;
console.log(student.age);

student["fulName"] = "Rahul sharma";
console.log(student.fulName);