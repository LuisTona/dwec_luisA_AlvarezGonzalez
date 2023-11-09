let parrafos = document.getElementsByTagName('p');
console.log(parrafos.length);

let enlaces = document.getElementsByTagName('a');
let enlace = enlaces[enlaces.length -2].getAttribute("href");
console.log(enlace);

let cont = 0;
for(let k = 0; k < enlaces.length; k++){
    if(enlaces[k].getAttribute("href") == "https://www.google.es"){
        cont += 1;
    }
}
console.log(cont);

let parrafo = document.getElementsByTagName('p')[1];

// let texto = parrafos[1].firstChild;
// let textoCont =  texto.split(" ");
// console.log(textoCont.length);