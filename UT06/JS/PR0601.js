
// let li = document.querySelectorAll('li');

// li.forEach((li)=>{
//     li.addEventListener('click', handleClick);
//     console.log(li.key);
// })


// function handleClick(event){
//     console.log(event.currentTarget);
//     li.forEach((li)=>{
//         if(event.ctrlKey){
//             event.currentTarget.className = 'selected'
//         }else if(event.shiftKey){
//             event.currentTarget.className = 'selected'
//             if(li.className == 'selected'){
                
//                 console.log(li.id);
//                 event.currentTarget.className = 'selected'
//             }
//             // li.className == 'selected' ?  
//             // console.log(li.id)
//             // :event.currentTarget.className = 'selected';
//         }else{
//             li.className = '';
//             event.currentTarget.className = 'selected'
//         }
//     })
// }

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
    const divList = document.getElementsByTagName('div');
    data.forEach(({text, selected}, index)=>{
        const divItem = document.createElement('div');
        divItem.textContent = text;
        divItem.classList.add = ('item');
        divItem.dataset.id = index;
        if(selected){
            divItem.classList.add('selected');
        }else {
            divItem.classList.remove('selected');
        }
        divList[0].append(divItem);
        divItem.addEventListener('click', handleClick);
    })
}
renderList();

function handleClick(event){
    console.log(event.currentTarget);
    let divs = document.querySelectorAll('div');
    divs.forEach((div)=>{
        
        if(event.ctrlKey){
            event.currentTarget.className = 'selected'
        
        }else if(event.shiftKey){
            
        }else{
            div.className = '';
            event.currentTarget.className = 'selected'
        }
    })
}