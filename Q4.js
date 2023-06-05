const prompt = require('prompt-sync')();
var x=parseInt(prompt("Enter a number: "));
var temp=x;
var num=0;
while (temp>0) {
   var r=temp%10;
   num=num*10+r;
    temp=Math.floor(temp/10);
}
x==num? console.log("Number is Palindrome"):console.log("Number is not Palindrome")
