let precioManzanas = +(prompt("Cual es el precio de las manzanas"));
    kilosManzanas = +(prompt("Cantidad de kilos de manzanas"));
    precioNaranjas = +(prompt("Cual es el precio de las naranjas "));
    kilosNaranjas = +(prompt("Cantidad de kilos de naranjas"));
    precioPlatanos = +(prompt("Cual es el precio de los platanos"));
    kilosPlatanos = +(prompt("Cantidad de kilos de platanos"));

let totalKilos = kilosManzanas+kilosNaranjas+kilosPlatanos;
let totalPrecio = (precioManzanas * kilosManzanas)+(precioNaranjas * kilosNaranjas)+(precioPlatanos * kilosPlatanos);
alert (`Has comprado un total de ${totalKilos} kilos de fruta y ta ha costado ${totalPrecio} euros`);