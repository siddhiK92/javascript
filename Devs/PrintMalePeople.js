const people=[
    {firstName:"siddhi",gender:"female"},
    {firstName:"ram",gender:"male"},
    {firstName:"rim",gender:"female"},
    {firstName:"sid",gender:"male"}
];
for(let i=0;i<people.length;i++){
    if(people[i].gender=="male"){
        console.log(people[i].firstName);
    }
}