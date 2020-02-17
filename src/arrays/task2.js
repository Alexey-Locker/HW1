////// Сумма нечетных чисел //////
function sum_odd(arr) {
let sum = 0;
for (let numArr of arr){
    if (numArr % 2 !==0) sum += numArr;
}
return (sum);}