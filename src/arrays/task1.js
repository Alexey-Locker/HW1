///// Минимальное и максимальное значение массива //////

let arr = [1, 32, 23, 43, 65, 732, 2, 553];
console.log(arr);
arr.sort( (a, b) => a - b ); 
console.log("Минимальное значение в масвиве " + arr[0] + " Максимальное значение в масвиве " + arr[arr.length - 1] );