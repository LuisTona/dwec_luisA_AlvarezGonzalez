function convertToBytes(capacity, from){
    if(from == "KB" | from == "Kilobyte"){
        return (capacity * 1000);
    }if(from == "MB" | from == "Megabyte"){
        return (capacity * 1000000);
    }if(from == "GB" | from == "Gigabyte"){
        return (capacity * 1000000000);
    }if(from == "TB" | from == "Terabyte"){
        return (capacity * 1000000000000);
    }if(from == "PB" | from == "Petabyte"){
        return (capacity * 1000000000000000);
    }if(from == "EB" | from == "Exabyte"){
        return (capacity * 1000000000000000000);
    }
}
let capacity = prompt("Introduce la cantidad");
let from = prompt("Introduce abreviatura");
console.log(convertToBytes(capacity, from));