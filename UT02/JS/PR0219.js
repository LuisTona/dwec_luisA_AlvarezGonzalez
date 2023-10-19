function sumOfMults (k, n){
    let j = 0;
    let a = "";
    for(let i = 0; i <= k; i++){
         a = a + "-" + (n +"*"+ (i+1));
         j = j + (n * i);
    }
    return (a + "="+ j);
}
console.log(sumOfMults(5,1));