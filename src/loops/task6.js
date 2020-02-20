
function mirror(n){
let sum2 = 0;
while (n > 0){
    sum2 *= 10;
    sum2 += (n % 10);
    n = Math.floor(n / 10);
}
return sum2}