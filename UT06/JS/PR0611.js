let expresion = /(([0-2]{1,1}[0-9]{1,1})|([3]{1,1}[0-1]{1,1}))\/(([0]{1,1}[1-9]{1,1})|[1]{1,1}[0-2]{1,1})\/[1-2]{1,1}[0-9]{3,3}$/
let btn = document.getElementById('enviar')
let fecha = document.getElementById('fecha')
let regexp = /\//
btn.addEventListener('click', ()=>{
    if(fecha.value.match(expresion)){
        let formato = fecha.value.replace(/\//gi, ' de ')
        console.log(formato);
        document.getElementById('fevalido').removeAttribute("hidden")
        document.getElementById('fevalido').textContent = formato ;
        
        document.getElementById('feinvalido').setAttribute("hidden",true);
    }else{
        document.getElementById('fevalido').setAttribute("hidden",true);
        document.getElementById('feinvalido').removeAttribute("hidden");

    }

})