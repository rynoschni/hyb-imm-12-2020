
const extraCandies = 3;
let arr = [2,3,5,1,3];
function addCandies(arr,extraCandies) {
  let isBiggest = [];
  let bigNum = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i] >= bigNum) {
      bigNum = arr[i];
    }
  }
  for (j = 0; j < arr.length; j++) {
    let newCandies = arr[j] + extraCandies;
    if (newCandies >= bigNum){
      isBiggest.push(true);
    } else {
      isBiggest.push(false);
    }
  }
  return isBiggest;
}

console.log(addCandies(arr, extraCandies));