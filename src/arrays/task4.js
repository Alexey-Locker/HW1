////// Количество нечетных символов в массиве //////
function odd_amount(arr){
let NumOdd = 0;
for (let numArr of arr){
    if (numArr % 2 !==0) NumOdd++;
   }
   return NumOdd
}