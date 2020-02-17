////// Сортировка пузирем //////
function sort_hubble(arr1){
for(let i = 0; i < arr1.length; i++){
    for(let j = i + 1; j < arr1.length ; j++){
        if(arr1[i] > arr1[j]){
            let num = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = num;
        }
    }
}
return arr1;
}

////// Сортировка выбором //////
function sort_selection(arr2){
for(let i = 0; i < arr2.length; i++){
    let num = arr2[i];
    for(let j = i + 1; j < arr2.length; j++ ){
        if(num > arr2[j]) num = arr2[j];
        if (arr2[i] !== num){
            arr2[j] = arr2[i];
            arr2[i] = num;
        }
    }
  }
  return arr2;
}
 

////// Сортировка вставками //////
function sort_insert(arr3){
for (let i = 0; i < arr3.length; i++){ 
       let v = arr3[ i ], j = i-1;
       while (j >= 0 && arr3[j] > v)
           {arr3[j+1] = arr3[j]; j--;}
       arr3[j+1] = v;
    }  
    return arr3;
}