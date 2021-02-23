// //forEACH
// const myArray = [1, 2, 3];
// myArray.forEach((element) => {
//   console.log(element);
// });

// const myForEach = () => {
//   for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
//   }
// }

// myForEach();

//MAP
// const myArray = [1, 2, 3, 4, 5, 6];
// const mapArr = myArray.map(num => num + 30);
// console.log(mapArr)

// let arr = []
// for (let i = 0; i < myArray.length; i++){
//   result = myArray[i] + 30;
//   arr = [...arr, result]
// }
// console.log(arr);

//FILTER
// const myArray = [1,2,3,4,5,6];
// const filterArr = myArray.filter(num => num === 2 || num === 4);
// console.log(filterArr) // [2,4]

// let arr = [];
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] === 2 || myArray[i] === 4) {
//     result = myArray[i];
//     arr = [...arr, result];
//   }
// }
//   console.log(arr);

//Stging Sort Descending
// function sort(str) {
//     var sorted = str;
//     //Selection sort
//     for (var i = 0; i < str.length; i++) {
//         for(var j = i + 1; j < str.length - 1; j++) {
//             if (str[i] < str[j]) {
//                 str = swap(str, i, j)
//             }
//         }
//     }
//     return str;
// }
// function replaceAt(str, i, char) {
//   return str.substr(0, i) + char + str.substr(i + 1);
// }

// function swap(str, i1, i2) {
//   return replaceAt(replaceAt(str, i1, str[i2]), i2, str[i1]);
// }

// console.log(sort("zaasfweqrouoicxzvjlmmknkniqwerpopzxcvdfaa"));
// //output: aaaaccdeeffiijkklmmnnoooppqqrrsuvvwwxxzzz

//SORT
// const myArray = [6,5,4,3,2,1];

// const ascend = myArray.sort();
// console.log(ascend);

// const mySort = (arr) => {
//   for (var j = 0; j < arr.length - 1; j++) {
//     for (var i = 0, swapping; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swapping = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = swapping;
//       };
//     };
//   };
//   return arr;
// }
// console.log(mySort(myArray));

//CONCAT
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// // const myArr = arr1.concat(arr2);
// // console.log(myArr) // [1,2,3] + [4,5,6] = [1,2,3,4,5,6]

// let arr = [];
// const conCat = () => {
//   for (let i = 0; i < arr1.length; i++){
//     arr = [...arr, arr1[i]];
//   };
//   for (let j = 0; j < arr2.length; j++){
//     arr = [...arr, arr2[j]];
//   }
// }
// conCat();
// console.log(arr);

//JOIN
const arr = ["j", "e", "d", "i"];
// console.log(arr.join("")); // ‘j’+’e’+’d’+’i’ = jedi

let str = "";
const myJoin = () => {
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i];
  }
};
myJoin();
console.log(str);
