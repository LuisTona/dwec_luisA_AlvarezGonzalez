function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
};

let usuario = {
    nombre: 'luis'
};
let apellido = {
    apellido: 'alvarez'
};
console.log(mergeObjects(usuario, apellido));
