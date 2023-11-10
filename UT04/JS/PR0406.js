let button = document.querySelector('#btn');
let div = document.getElementsByClassName('images')

button.addEventListener('click', () => {
    let image = document.getElementsByTagName('img'); 
      
    let aux = (Math.random()*10/2).toFixed();
    console.log(aux);
    if(aux ==5){
        aux = 4;
    }
    div[0].append(image[aux])
})
console.log(div);