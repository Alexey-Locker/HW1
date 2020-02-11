////// Сумма нечетных чисел //////
let arr = [1, 32, 23, 43, 65, 732, 2, 553];
let sum = 0;
for (let numArr of arr){
    if (numArr % 2 !==0) sum += numArr;
}
console.log("Сума нечетных чисел в массиве " + sum);