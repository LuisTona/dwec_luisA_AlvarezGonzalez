
function fact(n){
    let total = 1;
    for(k = 0; k < n; k++){
        total = total * (n -k);
    }
    return total;
}
let num = prompt("Factorial de:");
console.log(fact(num));


