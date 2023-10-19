function covertCapacity(n, from, to){

    if(from == "KB" | from == "Kilobyte"){
        n = n * 1000;
    }if(from == "MB" | from == "Megabyte"){
        n = n * 1000000;
    }if(from == "GB" | from == "Gigabyte"){
        n = n * 1000000000;
    }if(from == "TB" | from == "Terabyte"){
        n = n * 1000000000000;
    }if(from == "PB" | from == "Petabyte"){
        n = n * 1000000000000000;
    }if(from == "EB" | from == "Exabyte"){
        n = n * 1000000000000000000;
    }

    if(to == "KB" | to == "Kilobyte"){
        return (n / 1000);
    }if(to == "MB" | to == "Megabyte"){
        return (n / 1000000);
    }if(to == "GB" | to == "Gigabyte"){
        return (n / 1000000000);
    }if(to == "TB" | to == "Terabyte"){
        return (n / 1000000000000);
    }if(to == "PB" | to == "Petabyte"){
        return (n / 1000000000000000);
    }if(to == "EB" | to == "Exabyte"){
        return (n / 1000000000000000000);
    }
}

let capacidad = prompt("Ingrese una cantidad");
let deUnidad = prompt("Ingrese de que unidad quiere pasarlo");
let aUnidad = prompt("Ingrese a la unidad que quiere pasarlo");

console.log((covertCapacity(capacidad, deUnidad, aUnidad)));