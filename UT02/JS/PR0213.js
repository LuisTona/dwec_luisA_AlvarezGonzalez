function isPrime(n){
    
    let c = "";

    for(j = 0; j < n; j++){
        let i = 0;
        for(k = 0; k <= j; k++){
            
            if(j % k == 0){
                i++;
            }
        }
        if(i <= 2){
            c = c + "-" + j;
        }
    }
    return c;
}
let num;
do{
let num = prompt("Introduzca un numero");

console.log(isPrime(num));
}while(num != 0)