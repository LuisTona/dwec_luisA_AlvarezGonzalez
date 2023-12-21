let form = document.forms.register;

let mail = form.elements.correo;
let pass = form.elements.pass;
// let repPass = form.element.pass2;

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

let pwd = [];
let level = 0; 

function isUpper(palabra){
    level = 0;
    let especiales = '@#~€¬·$%&/()=_.<>+-*?¿¡!|ªº';
    palabra.forEach(e =>{
        especiales.split('').forEach(element => {
            palabra == element ? level = level + 1 :'';
        });
        e === e.toUpperCase() ? level = level + 1 : '';
    })
}

pass.addEventListener('keydown', (e)=>{
    // console.log(`tecla pulsada: ${e.key}`);

    if(e.key == 'Backspace'){
        if(pass.value.length >= 0){
            pwd.splice(pass.value.length, 1);
            isUpper(pwd);
        }else{
            level = 0;
        }

    }else{
        
        pwd[pass.value.length] = e.key;
        isUpper(pwd);
        level =(pwd.toString().replaceAll(',', ' ').length + level) / 4;

    }
    
    
    let control = document.getElementById('control');
    switch(level){
        case 0:
        case 1:
        case 2:       
        console.log(level);
            control.style.width = 10+'px';
            control.style.backgroundColor = 'red'
        break;

        case 3:
        case 4:
        case 5:
        case 6:
            console.log(level);
            control.style.width = 50+'px';
            control.style.backgroundColor = 'orange'
            break;
        case 7:
        case 8:
        case 9:
            console.log(level);
            control.style.width = 100+'px';
            control.style.backgroundColor = 'green'
            break;
        case 10:
        case 11:
        case 12:
            console.log(level);
            control.style.width = 150+'px';
            control.style.backgroundColor = 'lime'
            break;
    }

})

// pass2.addEventListener('blur', ()=>{

// })
// }else if(e.key =='ArrowRight' || e.key == 'ArrowUp' || e.key == 'ArrowLeft' || e.key == 'ArrowDown' || e.key == 'Shift' || e.key == 'AltGraph' || e.key == 'Control'){
// console.log(mail);