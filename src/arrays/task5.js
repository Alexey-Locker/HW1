////// Смена местами половины элементов массива //////
function arr_drop (arr){
arr.sort( (a, b) => a - b ); 
arr.reverse;
for(let i = 0; i < arr.length / 2; i++){
    let nums = arr.pop();
    arr.unshift(nums);
}
return arr
}
