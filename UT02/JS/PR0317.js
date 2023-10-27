function generateUsername(arr){
    arr.forEach(usuario =>{
        let { name, apellido } = usuario;
        let nick = name[0] + apellido
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