// Найти сумму только с положительных из трех чисел
 function sum_positiv (x1, x2, x3){
     let sum = 0;
 (x1 > 0) ? sum += x1: sum
 (x2 > 0) ? sum += x2: sum
 (x3 > 0) ? sum += x3: sum
   return sum;
}