let form = document.forms.register;

let mail = form.elements.correo;
let pass = form.elements.pass;

mail.addEventListener('blur', ()=>{
    let email = mail.value.split("")
    
    if(!email.includes("@") || !email.includes(".")){

        mail.classList.add('invalido');
        document.getElementById('error').removeAttribute("hidden");   
    }else{
        
        mail.classList.remove('invalido');    
        document.getElementById('error').setAttribute("hidden", true);
        
    }
    // console.log(email.indexOf("@"));
})
let cont = 0;
let pwd = [];
let level = 0;    
function isUpper(palabra){
    level = 0;
    palabra.forEach(e =>{
        level = level + 1;
        return e === e.toUpperCase();
    })
}

function specialCharacter(letra){
    let especiales = '@#~€¬·$%&/()=_.<>+-*?¿¡!|ªº';
    especiales.split('').forEach(e => {
        return letra == e;
    });
    // return letra ===
}

pass.addEventListener('keydown', (e)=>{
    console.log(`tecla pulsada: ${e.key}`);

    if(e.key == 'Backspace'){
        pwd.splice(cont, 1);
        cont = cont -1;
    }else if(e.key =='ArrowRight' || e.key == 'ArrowUp' || e.key == 'ArrowLeft' || e.key == 'ArrowDown' || e.key == 'Shift'){

    }else{
        pwd[cont] = e.key;
        cont = cont +1;
        isUpper(pwd);
        console.log(level); 
    }
})
console.log(mail);


