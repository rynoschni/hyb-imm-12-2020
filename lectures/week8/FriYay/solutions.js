// bubble sort

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let swap = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = swap;
//             }
//         }
//     }
//     return arr;
// };

// console.log(bubbleSort([1,4,2,5]));

// candies

// const candies = (candiesArr, extraCandies) => {
//     let max = Math.max(...candiesArr);
//     return candiesArr.map(candy => candy + extraCandies >= max);
// };
// console.log(candies([2,3,5,1,3], 3));

// shuffled string

s = "cdoe"
indices = [0, 2, 1, 3]

const shuffledString = (s, indices) => {
    let unshuffled = "";
    for (let i = 0; i < s.length; i++) {
        unshuffled += s[indices[i]];
    }
    return unshuffled;
}
console.log(shuffledString(s, indices));


// prime numbers



// fizzbuzz

// const fizzBuzz = (num) => {
//     for (let i = 1; i < num; i++){
//         if (i % 15 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 == 0) { 
//             console.log("Fizz");
//         } else if (i % 5 == 0) { 
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// };

// fizzBuzz(25);
