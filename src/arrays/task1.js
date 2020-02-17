///// Минимальное и максимальное значение массива //////
function max_min(arr){
arr.sort( (a, b) => a - b ); 
return [arr[0], arr[arr.length - 1]]
}