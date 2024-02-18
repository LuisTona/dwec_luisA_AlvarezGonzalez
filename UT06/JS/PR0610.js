function validateFecha(fecha){
    let expresion = /(([0-2]{1,1}[0-9]{1,1})|([3]{1,1}[0-1]{1,1}))\/(([0]{1,1}[1-9]{1,1})|[1]{1,1}[0-2]{1,1})\/[1-2]{1,1}[0-9]{3,3}$/
    fecha.addEventListener('blur',()=>{
    
        if(fecha.value.match(expresion)){
            document.getElementById('fevalido').removeAttribute("hidden");
            document.getElementById('feinvalido').setAttribute("hidden",true);
        }else{
            document.getElementById('fevalido').setAttribute("hidden",true);
            document.getElementById('feinvalido').removeAttribute("hidden");
        }
    })
}
function validateTlfn(Tlfn){
    let expresion = /^(\+[0-9]{2})[0-9]{9}/
    Tlfn.addEventListener('blur',()=>{
    
        if(Tlfn.value.match(expresion)){
            document.getElementById('valido').removeAttribute("hidden");
            document.getElementById('invalido').setAttribute("hidden");
            console.log('hola');
        }else{
            console.log('adios');
            document.getElementById('valido').setAttribute("hidden",true);
            document.getElementById('invalido').removeAttribute("hidden");
        }
    })
}
let Tlfn = document.getElementById('telefono');
let fecha = document.getElementById('fecha');
validateFecha(fecha);
validateTlfn(Tlfn);
console.log(fecha);