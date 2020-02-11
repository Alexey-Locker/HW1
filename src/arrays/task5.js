////// Смена местами половины элементов массива //////
let arr = [1, 32, 23, 43, 65, 732, 2, 553];
arr.sort( (a, b) => a - b ); 
arr.reverse;
for(let i = 0; i < arr.length / 2; i++){
    let nums = arr.pop();
    arr.unshift(nums);
}
console.log(arr + " Данный массив был изменен"); 