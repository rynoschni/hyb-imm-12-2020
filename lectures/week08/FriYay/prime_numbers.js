// const isPrime = num => {
//   for(let i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num > 1;
// }

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

const primeArray = max => {
    arr = [];
    for(let i=2; i < max; i++) {
        if (isPrime(i) === true) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(primeArray(201));