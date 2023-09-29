let nac = prompt("En que año nacio");

if(nac >=1949 && nac <=1968){
    alert("Baby Boomer");
}else if(nac <= 1980){
    alert("Generacion x");
}else if(nac <= 1993){
    alert("Generacion Millenial");
}else if(nac <=2010){
    alert("Generacion Z");
}else if(nac <1949 || nac > 2010){
    alert("No se han asignado ninguna generacion para ese año");
}
