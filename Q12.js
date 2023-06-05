let arr=[1,2,3,4,5,6];
let start=0,end=arr.length-1;
while(s<e)
{
    let temp=arr[s];
    arr[s]=arr[e];
    arr[e]=temp;
    s++;
    e--;
}
console.log(arr);