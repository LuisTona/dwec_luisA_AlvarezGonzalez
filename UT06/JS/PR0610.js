function validateFecha(fecha){
    let expresion = /(([0-2]{1,1}[0-9]{1,1})|([3]{1,1}[0-1]{1,1}))\/(([0]{1,1}[1-9]{1,1})|[1]{1,1}[0-2]{1,1})\/\d+/
    fecha.addEventListener('blur',()=>{
    
        if(fecha.value.match(expresion)){
            document.getElementById('valido').removeAttribute("hidden");
        }else{
            document.getElementById('valido').setAttribute("hidden",true);
        }
    })
}
function validateTlfn(Tlfn){
    let expresion = /^\(\+[0-9]{2}\)[0-9]{9}/
    Tlfn.addEventListener('blur',()=>{
    
        if(Tlfn.value.match(expresion)){
            // document.getElementById('valido').removeAttribute("hidden");
            console.log('hola');
        }else{
            console.log('adios');
            document.getElementById('valido').setAttribute("hidden",true);
        }
    })
}
let Tlfn = document.getElementById('telefono');
let fecha = document.getElementById('fecha');
validateFecha(fecha);
validateTlfn(Tlfn);
console.log(fecha);