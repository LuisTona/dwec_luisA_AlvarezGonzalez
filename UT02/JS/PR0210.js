let numMay = 0;
let numMen = 0;
for(let k = 0; k<5; k++){
    let num =+(prompt("Introduzca 5 numeros"));
    
    if(k==0){
        numMay = num;
        numMen = num;
    }
    
    if(num < numMen){
        numMen = num;
    }else if(num > numMay){
        numMay = num;
    }
}
alert (`El mayor numero es ${numMay} y el menor ${numMen}`)