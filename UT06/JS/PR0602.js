let board = document.getElementById('tabla');
let aux = 0
function renderList (){
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
    
    event.target.classList.toggle ('colorI');
});
board.addEventListener('contextmenu', (event)=>{   
    event.preventDefault();
    event.target.classList.add ('colorD');
});
