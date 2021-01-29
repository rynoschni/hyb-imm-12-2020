// const myArray = [1, 2, 3];
// myArray.forEach((num) => {
//   console.log(num);
// });

// const myForEach = (arr) => {
  
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   };
// };
// const arr = [4,6,8]
// myForEach(arr);

// const myMap = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 30;
//     newArr = [...newArr, arr[i]]
    
//   }
//   return newArr;
// }

// console.log(myMap([1,2,3]))

// const arr = [1, 2, 3, 4, 5, 6];
// const num1 = 2
// const num2 = 4

// const myFilter = (arr,num1, num2) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] === num1 || arr[i] === num2) {
//       newArr = [...newArr, arr[i]];
//     };
//   };
//   return newArr;
// }
// console.log(myFilter(arr,num1,num2));

const myArray = [6, 5, 4, 3, 2, 1];

const mySort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, swapping; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swapping = arr[j + 1];  //5
        arr[j + 1] = arr[j];  //[6,5] => [6,6]
        arr[j] = swapping //[6,6] => [5,6]
      };
    };
  };
  return arr;
};
console.log(mySort(myArray));

