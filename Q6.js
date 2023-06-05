const prompt=require('prompt-sync')();
let n=parseInt(prompt('Enter number of element : '));
let arr=[];
for (let index = 0; index < n; index++) {
    var num=parseInt(prompt('Enter number : '));
    arr.push(num); 
}
let maxi=Number.MIN_SAFE_INTEGER;
for (let index = 0; index < n; index++) {
    // if(arr[index]>maxi)
    // {
    //     maxi=arr[index];
    // }
    maxi= arr[index]>maxi?arr[index]:maxi;
    
}

console.log(`Max value is ${maxi}`);