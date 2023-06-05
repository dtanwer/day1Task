const prompt = require('prompt-sync')();
const checkPrime = (num) => {
    for (let i = 2; i <=Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
let num = parseInt(prompt("Enter a Number : "));

if (checkPrime(num)) {
    console.log("Number is prime !");
}
else{
    console.log("Number is not prime !");
}