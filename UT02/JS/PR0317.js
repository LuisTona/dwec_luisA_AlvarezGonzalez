function generateUsername(arr){
    arr.forEach(usuario =>{
        let nick = usuario.name[0] ...usuario.apellido
        usuario.nick= nick;
    });
    return arr;
}
let arr = [
    {
        name: 'luis',
        apellido: 'alvarez',
    },
    {
        name: 'alex',
        apellido: 'valdueza',
    }
]
console.log(generateUsername(arr));