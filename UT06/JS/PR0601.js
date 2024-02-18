const data = [{
    text: 'Primero',
    selected: false,
},
{
    text: 'Segundo',
    selected: false,
},
{
    text: 'Tercero',
    selected: false,
},
{
    text: 'Cuarto',
    selected: false,
},
{
    text: 'Quinto',
    selected: false,
}];

function renderList(){
    const divList = document.getElementById('body');
    divList.innerHTML = ' ';
    data.forEach(({text, selected}, index)=>{
        
        const divItem = document.createElement('div');
        divItem.textContent = text;
        divItem.classList.add = ('item');
        divItem.dataset.id = index;
        if(selected){
            divItem.className ='selected';
        }
        divList.append(divItem);
        
        divItem.addEventListener('click', handleClick);
    })
}
renderList();

function handleClick(event){
    let id = event.currentTarget.dataset.id
    data.forEach((element, index)=>{
        if(id == index && event.ctrlKey){
            if(element.selected == true){
                element.selected = false
            }else{
                element.selected = true;
            }
            renderList();
        }else if(id == index){
            element.selected = true;
        }
        else if(id != index && !event.ctrlKey){
            element.selected = false;
        }
    })
    renderList();
}