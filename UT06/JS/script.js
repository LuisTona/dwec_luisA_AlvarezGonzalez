let form = document.forms.register;
console.log(form.elements.pass.value);
let mail = form.elements.correo;
let pass = form.elements.pass;
let small ='abcdefghijklmnñopqrstuvwxyz'

mail.addEventListener('blur', ()=>{
    let email = mail.value.split("")
        if(!email.includes("@") || !email.includes(".")){
            mail.classList.add('invalido');
            document.getElementById('error').removeAttribute("hidden");
            document.getElementById('seguridad').style.top = 95+'px'   
        }else{
            
            mail.classList.remove('invalido');    
            document.getElementById('error').setAttribute("hidden", true);
            document.getElementById('seguridad').style.top = 70+'px'   
        }
})

let pwd = [];
let level = 0; 

function isUpper(palabra){
    level = 0;
    let especiales = '@#~€¬·$%&/()=_.<>+-*?¿¡!|ªº';
    let numeros = '0123456789'
    small.split('').forEach(element => {
        if(palabra.includes(element) && palabra.length >=8){
            level +=1
        }
        if(palabra.includes(element.toLocaleUpperCase()) && palabra.length>= 8){
            level +=1
        }
    });
    numeros.split('').forEach(element=>{
        if(palabra.includes(element) && palabra.length >= 8){
            level +=1
        }
    })
    especiales.split('').forEach(element => {
        if(palabra.includes(element) && palabra.length >= 8){
            level +=1
        }
    });
    
}

pass.addEventListener('keyup', (e)=>{
    isUpper(pass.value);

    let control = document.getElementById('control');
    switch(level){
        case 0:
        case 1:      
        case 2:
        // console.log(level);
            control.style.width = 10+'px';
            control.style.backgroundColor = 'red'
        break;

        case 3:
        case 4:
       
            // console.log(level);
            control.style.width = 50+'px';
            control.style.backgroundColor = 'orange'
            break;
            
        case 5: 
        case 6:
            // console.log(level);
            control.style.width = 100+'px';
            control.style.backgroundColor = 'green'
            break;
        case 7:
        case 8:
            // console.log(level);
            control.style.width = 150+'px';
            control.style.backgroundColor = 'lime'
            break;
    }

})

pass2.addEventListener('blur', ()=>{
    if(pass.value != pass2.value){
        pass2.style.backgroundColor = 'red'
    }else{
        pass2.style.backgroundColor = 'white'
    }
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let span = document.getElementById('debil')

    if(level < 2){
        span.removeAttribute("hidden");
    }else if(pass.value != pass2.value){
        pass2.style.backgroundColor = 'red'
    }
    else{
        span.setAttribute("hidden", true);
        console.log(' correo=> '+form.elements.correo.value);
        console.log( ' Contraseña=> '+ form.elements.pass.value);
    }
})