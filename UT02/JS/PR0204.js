let radioCirculo = +(prompt("Cual es el radio del ciruculo"));

let perimetroCiruculo = 2 * Math.PI * radioCirculo;
let areaCirculo = Math.PI * Math.pow(radioCirculo, 2);

alert(`El perimetro del circulo de radio ${radioCirculo} es ${perimetroCiruculo} y su area es ${areaCirculo}`);