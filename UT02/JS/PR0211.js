let num = 10; 

do{
    num =+(prompt("Introduzca un numero"));
    if(num > 0 || num === Number){
        if(num % 2 == 0){
            alert(`El numero ${num} es Par`);
            break;
        }else{
            alert(`El numero ${num} es Impar`);
            break;
        }
    }
}while(num < 0 || num != Number)