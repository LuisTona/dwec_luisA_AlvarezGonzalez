let button = document.querySelector('#btn');
let div = document.getElementsByClassName('images')

button.addEventListener('click', () => {
    let image = document.querySelector('img:last-Child');    
    div[0].prepend(image);
})
console.log(div);
