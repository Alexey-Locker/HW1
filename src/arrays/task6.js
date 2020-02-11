////// Сортировка пузирем //////

let arr1 = [3, 5, 2, 4, 6, 8, 7, 9, 1, 10];
for(let i = 0; i < arr1.length; i++){
    for(let j = i + 1; j < arr1.length ; j++){
        if(arr1[i] > arr1[j]){
            let num = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = num;
        }
    }
}
console.log(arr1 + " Данный массив был отсортирован при помощи метода пузыря" );

////// Сортировка выбором //////

let arr2 = [3, 5, 2, 4, 6, 8, 7, 9, 1, 10];
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
console.log(arr2 + " Данный массив был отсортирован при помощи метода выбора" );

////// Сортировка вставками //////

let arr3 = [3, 5, 2, 4, 6, 8, 7, 9, 1, 10];
for (let i = 0; i < arr3.length; i++){ 
       let v = arr3[ i ], j = i-1;
       while (j >= 0 && arr3[j] > v)
           {arr3[j+1] = arr3[j]; j--;}
       arr3[j+1] = v;
    }  
console.log(arr3 + " Данный массив был отсортирован при помощи метода вставками");  