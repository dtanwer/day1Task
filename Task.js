//Q1 find sum in index range for different query then find maximum sum out of different range
//Q2 find next grater elemet for circular array 
//Q3 Impliment insertion sort using linked-list 
const prompt = require('prompt-sync')();
let arr = [1, 3, 2, 4, 2];
let pre = [];
let sum = 0;
arr.forEach(element => {
    sum += element
    pre.push(sum);
});
// console.log(pre);
let res = [];
let q = parseInt(prompt("Enter number of Query : "));
let maxi = Number.MIN_SAFE_INTEGER;
while (q--) {
    let startingIndex = parseInt(prompt("Enter starting Index : "));
    let endingIndex = parseInt(prompt("Enter ending Index : "));
    let temp = startingIndex == 0 ? pre[endingIndex] : pre[endingIndex] - pre[startingIndex - 1];
    maxi = temp > maxi ? temp : maxi;
    res.push(temp);
}
console.log(res);
console.log(maxi);





