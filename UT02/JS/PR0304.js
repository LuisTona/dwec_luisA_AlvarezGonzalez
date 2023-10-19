function containsObjects(obj1, obj2){
    for(let key in obj2){
        if(!obj1[key]){
            return false;
        }
    }
    return true;
}
let usuario = {
    nombre: 'luis',
    apellido: 'gonzalez',
    nif:'',
};
let apellido = {
    apellido: 'alvarez',
    edad: '25',
    nombre: 'luis'
};
console.log(containsObjects(apellido, usuario));