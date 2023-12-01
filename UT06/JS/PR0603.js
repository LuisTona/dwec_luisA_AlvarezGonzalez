let board = document.getElementById('tabla');

function renderList (){
    board.innerHTML = ``;
    let aux = 0
    for(let k = 0; k < 10; k++){
        let  divs = document.createElement('div');
            for(let i = 1; i < 11; i++){
                let spans = document.createElement('div');
                spans.textContent = i + aux
                spans.setAttribute('id', 'c'+ (i+aux))
                spans.classList.add ('border')
                divs.append(spans);
            }
            aux += 10;
        tabla.append(divs);
    }
}
renderList();

let div = document.querySelectorAll('div');

board.addEventListener('click', (event)=>{   
    renderList();
    board.innerHTML +=`
    <p>Casilla: ${event.target.textContent}</p>
    <p>Coordenada X: ${event.pageX}</p>
    <p>Coordenada Y: ${event.pageY}</p>`
});

