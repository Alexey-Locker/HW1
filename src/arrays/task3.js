////// Реверс массива //////
function revers(arr){

         for(let i = 0; i < (arr.length / 2); i++){
             let a = arr[arr.length - 1 - i];
             arr[arr.length - 1 - i] = arr[i];
             arr[i] = a;
         }
    return arr;
}