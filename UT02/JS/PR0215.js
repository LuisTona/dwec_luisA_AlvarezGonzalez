function calc(op, op1, op2){
    switch(op){
        case "+":
            return Number(op1) + Number(op2);
        case "-":
            return op1 - op2;
            
        case "*":
            return op1 * op2;
            
        case "/":
            return op1 / op2;

        case "%":
            return op1 % op2;
    }
    return "No coincide con ningun operador"
}
let op = prompt("Introduzca operador");
let op1 = prompt("Introduzca operando");
let op2 = prompt("Introduzca operando");
console.log(calc(op, op1, op2));