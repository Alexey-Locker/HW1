//Посчитать выражение Макс
function max (a1,a2,a3){
let multip = a1 * a2 * a3;
let sum1 = a1 + a2 + a3;
if (multip > sum1){
    return multip + 3
}else{
    return sum1 + 3
}
}