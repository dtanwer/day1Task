//Q1 find sum in index range for different query then find maximum sum out of different range
//Q2 find next grater elemet for circular array 
//Q3 Impliment insertion sort using linked-list 
const prompt = require('prompt-sync')();
let arr=[1,3,2,4,2];
let pre=[];
let sum=0;
arr.forEach(element => {
    sum+=element
    pre.push(sum);
});
console.log(pre);
let res=[];
let q=parseInt(prompt("Enter number of Query : "));
while(q--)
{
    let startingIndex=parseInt(prompt("Enter starting Index : "));
    let endingIndex=parseInt(prompt("Enter ending Index : "));

    res.push(pre[endingIndex]-pre[startingIndex]);

}

console.log(res);




