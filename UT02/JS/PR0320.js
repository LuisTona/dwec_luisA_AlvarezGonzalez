function addNif(arr){
    arr.forEach(usuario => {
        let nif = usuario.dni % 23;
        let letras= 'TRWAGMYFPDXBNJZSQVHLCKE'
        usuario.nif = usuario.dni + letras[nif];
        delete usuario.dni;
    });
    return arr;
}
a=[
    {
        nombre:'Pepe',
        apellido:'Franco',
        dni:'71477825'
    }
]
console.log(addNif(a));