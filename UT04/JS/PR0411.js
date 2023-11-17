let button = document.querySelector('#add-button');
let ul = document.getElementById('todos');
let lista = [];


button.addEventListener('click', ()=>{
    let inp = document.getElementById('input-text').value;
    
    if(inp !==""){
        lista.push(inp);
        inp.value= "";
        ul.innerHTML = lista.map(inp => `<li>${inp}</li>`).join("");
    }
    //     lista[cont] = inp;
    //     cont++;
    //     ul.append(lista[cont]);
    // }
    //else{
    //     cont = lista.length;
    //     lista[cont] = inp;
    //     cont++;
    // }
    console.log(lista);
})