let calle = prompt("Ingrese su calle");
switch(calle){
    case "Calle Los Claveles":
    case "Calle El Rosal":
    case "Calle Las Hortensias":
    case "Calle Las Margaritas":
        alert(`Tienes que tomar la linea de bus 1 para ir desde ${calle} al trabajo`);
        break;
    case "Calle Teleno":
    case "Calle Catoute":
    case "Calle Peña Ubiña":
    case "Calle Vizcodillo":
        alert(`Tienes que tomar la linea de bus 2 para ir desde ${calle} al trabajo`);
        break;

    case "Calle Astorga":
    case "Calle La Bañeza":
    case "Calle Benavente":
        alert(`Tienes que tomar la linea de bus 3 para ir desde ${calle} al trabajo`);
        break;
}