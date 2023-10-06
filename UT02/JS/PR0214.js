
function fact(n){
    let total = 0;
    for(k = 0; k < n; k++){
        total = total * (n -k);
    }
    return total;
}
let num = prompt("Factorial de:");
console.log(fact(num));


