function isPrime(n){
    let i = 0;
    for(k = 0; k <= n; k++){
        if(n % k == 0){
            i++;
        }
    }
    return (i<=2);
    if(i <=2){
        return true;
    }else{
        return false;
    }
}
let num;
do{
let num = prompt("Introduzca un numero");

// console.log(isPrime(num));
console.log(num);
}while(num != 0)