const readline=require('readline');
function sum(a,b){
    return a+b;
}
function displayResult(a,b, result){
    console.log(`you entered: ${a} and ${b}`);
    console.log(`the sum of: ${a} and ${b} is: ${result}`);

}
function displayPassiveResult(a,b,result){
    console.log(`the sum of ${a} and ${b} has beencalculatd as ${result}`)

}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter first no: ",(num1)=>{
    rl.question("Enter second no: ",(num2)=>{
        const n1=parseFloat(num1);
        const n2=parseFloat(num2);

        const result=sum(n1,n2);

        displayResult(n1,n2,result);
        displayPassiveResult(n1,n2,result);
    })
})

