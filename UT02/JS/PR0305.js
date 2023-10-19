function removeUndefined(a){
    let b;
    for(let key in a){
        a[key] = b ;
    }
    return a
}
let usuario = {
    nombre: 'luis',
    apellido: 'gonzalez',
    nif:'',
};
console.log(removeUndefined(usuario));