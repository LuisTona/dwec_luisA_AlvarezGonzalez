function generateUsername(arr){
    arr.forEach(usuario =>{
        let { name, apellido } = usuario;
        let num = Math.trunc(Math.random()*100)
        let nick = name[0] + apellido + num
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