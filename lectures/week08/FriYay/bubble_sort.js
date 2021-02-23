const arr = [6, 3, 2, 1, 4, 5];

function bubbleSort(arr) {
  for (j = 0; j < arr.length; j++){ 
    for (i = 0; i < arr.length; i++){
      if (arr[i + 1] < arr[i]) {
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }  
  return arr;
}

function bubbleSort(arr) {
  let j=0;
  while (j < arr.length) { 
    for (i = 0; i < arr.length; i++){
      if (arr[i + 1] < arr[i]) {
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
    j++
  }
  return arr;
}

bubbleSort(arr);
console.log(arr);


