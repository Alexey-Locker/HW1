////// Количество нечетных символов в массиве //////
let arr = [1, 32, 23, 43, 65, 732, 2, 553];
let NumOdd = 0;
for (let numArr of arr){
    if (numArr % 2 !==0) NumOdd++;
}
console.log("Количество нечетных символов в массиве " + NumOdd);