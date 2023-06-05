const checkPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
let prime = [];
let i = 2;
while (prime.length <=100) {
    if (checkPrime(i)) {
        prime.push(i);
    }
    i++;
}

console.log(prime);