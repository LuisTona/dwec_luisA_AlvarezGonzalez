function getFibonacciAt(n){
    let a = 0;
    let b = 1;
    let c = 1;
    for(let k = 0; k < n-2; k++){
        a = b + c;
        c = b;
        b = a;
    }
    return b;
}

console.log(getFibonacciAt(7));