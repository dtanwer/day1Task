let first=0;
let second=1;
console.log(first);
console.log(second);
for (let i = 2; i < 10; i++) {
    console.log(first+second);
    let temp=second;
    second=first+second;
    first=temp;
}