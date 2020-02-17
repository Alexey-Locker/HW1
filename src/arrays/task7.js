////// Быстрая сортировка //////
const qsort = (arr3) =>{
     if (arr3.length < 2) {
        return arr3;
     }else {
        const pivot = arr3[Math.floor(Math.random() * arr3.length)];
        const less = arr3.filter(value => value < pivot);
        const greater = arr3.filter(value => value > pivot);
        return[...qsort(less), pivot, ...qsort(greater)];
     }
}

/// Сортировка слиянием ////// 
function merge(left, right){
    let L = 0, R=0, result = [];
    
    while(L < left.length && R < right.length ){
        if (left[L] < right[R]){
         result.push(left[L++]);   
        }else{ 
            result.push(right[R++]);
        }
    }
   return result.concat(left.slice(L)).concat(right.slice(R));
}
function merge_sort (items){
    if(items.length <= 1){
        return items;
     }else {
        const middle = Math.floor(items.length / 2);
        const left = items.slice(0,middle);
        const right = items.slice(middle);
        merge_sort(left);
        merge_sort(right);
        return merge(merge_sort(left), merge_sort(right));     
    }
   
}


/// Сортировка Шелла //////

function ShellSort (arr) {
    let gap = Math.floor(arr.length / 2);
    while (gap >= 1) {
        for (let i = gap; i < arr.length; i++) {
            const current = arr[i];
            let j = i;
            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}