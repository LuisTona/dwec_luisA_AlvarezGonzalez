let a = prompt("Hola tu nombre es:");
    b = prompt("La nota de tu primer examen fue:");
    c = prompt("la nota de tu segundo examen es:");
    b = Number(b);
    c = Number(c);
    let media = (b + c) / 2;
alert (`Hola ${a}, la nota media de tus examenes es ${media}`)