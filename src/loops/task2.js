function primeNumber(n){
for (let i = 0; i < n; i++){
    if(n % i === 0 && i !== 1){
        return("Данное число не является простым");
    } else if (i === n-1){return("Данное число простое");}
}
}