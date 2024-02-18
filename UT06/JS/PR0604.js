
let div = document.getElementById('content');

let cont = 0;

function renderList(){
    
    div.innerHTML = ``;
    let h1 = document.createElement('h1');
    h1.textContent = cont;
    div.append(h1);
    
    let clicker = document.createElement('div');
    clicker.className = 'clicker';
    
    clicker.addEventListener('click', (event)=>{
        cont++;
        renderList(); 
    })
    let top = Math.random()*(100 -10)+10;
    let left = Math.random()*(100 -10)+10;
    clicker.style.width = left+'px';
    clicker.style.height = top+'px';
    clicker.style.top = Math.random()*(window.innerHeight - top-50)+'px';
    clicker.style.left = Math.random()*(window.innerWidth - left)+'px';
    div.append(clicker);
}
renderList();
window.addEventListener('resize', renderList);