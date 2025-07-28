const readline = require('readline');

function sum(a, b) {
    return a + b;
}


function displayResult(a, b, result) {
    console.log("====================================");
    console.log(`You entered: ${a} and ${b}`);
    console.log(`The sum of ${a} and ${b} is: ${result}`);
    console.log("====================================");
}

const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter first number: ",(num1)=>{
    rl.question("Enter second number: ",(num2)=>{
        const n1=parseFloat(num1);
        const n2=parseFloat(num2);

        const result=sum(n1,n2);
        displayResult(n1,n2,result);

        rl.close();
    });
});

