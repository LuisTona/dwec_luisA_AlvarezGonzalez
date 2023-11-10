let button = document.querySelector('#btn');
let div = document.getElementsByClassName('images')

button.addEventListener('click', () => {
    let image = document.getElementsByTagName('img'); 
      
    let aux = Math.trunc( Math.random()*5 );      // 0.0 y 4.99999  // 0 y 4
    console.log(aux);

    div[0].append(image[aux])
})
console.log(div);