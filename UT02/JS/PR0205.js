let userNum;
do{
    userNum = +(prompt("Introduzca el numero correcto"));

    if (userNum == 5){
        alert(`Has introducido el numero ${userNum}`);
    }else{
        alert("Vuelve a introducir el numero");
    }
    console.log(userNum);
} while (userNum != 5);