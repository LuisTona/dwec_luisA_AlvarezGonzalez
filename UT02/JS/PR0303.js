function intersectObjects(obj1, obj2){
    for(let key in usuario){
        for(let key1 in apellido){
            if(key == key1){
                return true;
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