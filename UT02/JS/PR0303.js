function intersectObjects(obj1, obj2){
    for(let key in obj1){
        for(let key1 in obj2){
            if(key == key1){
                console.log(key1);
            }
        }
    }
}

let usuario = {
    nombre: 'luis',
    apellido: 'gonzalez'
};
let apellido = {
    apellido: 'alvarez',
    edad: '25',
    nombre: ''
};
console.log(intersectObjects(usuario, apellido));