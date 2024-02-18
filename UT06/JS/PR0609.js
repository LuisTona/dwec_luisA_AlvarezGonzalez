const login = document.getElementById('login')
const registro = document.getElementById('register');
const form = document.getElementById('form');
const logBtn = document.getElementById('loginBtn')
const close = document.getElementById('close')
const back = document.getElementById('back')

back.addEventListener('click', ()=>{
    document.getElementById('modal').style.display = 'none'
    document.getElementById('back').style.display = 'none'
})
close.addEventListener('click', ()=>{
    document.getElementById('modal').style.display = 'none'
    document.getElementById('back').style.display = 'none'
})
logBtn.addEventListener('click',()=>{
    document.getElementById('modal').style.display = 'block'
    document.getElementById('back').style.display = 'block'
})
registro.addEventListener('click', ()=>{
    document.getElementById('loginForm').style.display = 'none'
    document.getElementById('regForm').style.display = 'block'
})
login.addEventListener('click', ()=>{
    document.getElementById('regForm').style.display = 'none'
    document.getElementById('loginForm').style.display = 'block'
})
