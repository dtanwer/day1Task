const checkPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
const nPrimeNumbers = (n, startAt) => {
    let arr = [];
    let i = startAt + 1;
    while (arr.length<n) {
        if (checkPrime(i)) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(nPrimeNumbers(3, 7));
