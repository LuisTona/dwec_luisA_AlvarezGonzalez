const data = {
    'CA':[
        {
            'name':'Castilla y Leon',
            'prov':[
                {
                    'name':'Leon',
                    'pueblos':['Leon', 'Villabalter', 'Trobajo del camino'],
                },
                {
                    'name':'Zamora',
                    'pueblos':['Abezames','Alcañices','Alcubilla de Nogales'],
                },
                {
                    'name':'Salamanca',
                    'pueblos':['Abusejo','Agallas','Ahigal de los Aceiteros']
                },
            ]
        },
        {
            'name':'Galicia',
            'prov':[
                {
                    'name':'Lugo',
                    'pueblos':['Abadín','Alfoz','Antas de Ulla'],
                },
                {
                    'name':'Ourense',
                    'pueblos':['Allariz','Amoeiro','Arnoia, A'],
                },
                {
                    'name':'Pontevedra',
                    'pueblos':['Agolada','Arbo','Baiona']
                },
            ],
        },
        {
            'name':'Madrid',
            'prov':[{
                'name':'Madrid',
                'pueblos':['Acebeda, La','Ajalvir','Alameda del Valle']
            }]
        }
    ]
}

const ca = document.getElementById('CA')
const prov = document.getElementById('prov')
const pue = document.getElementById('pue')
data.CA.forEach(element => {
    let opt = document.createElement('option')
    opt.textContent = element.name
    opt.value = element.name
    ca.append(opt)
});

ca.addEventListener('change', ()=>{
    prov.innerHTML = ''
    pue.innerHTML = ''
    data.CA.forEach(element=>{

        if(element.name == ca.value){
            prov.innerHTML= ' ';
            let opt = document.createElement('option')
            opt.textContent = ""
            opt.value = ""
            prov.append(opt)
            element.prov.forEach(el=>{
                let opt = document.createElement('option')
                opt.textContent = el.name
                opt.value = el.name
                prov.append(opt)
            })
        }
    })
    prov.addEventListener('change', ()=>{
        data.CA.forEach(el=>{
            el.prov.forEach(elem=>{
                if(elem.name == prov.value){
                    pue.innerHTML= ' ';
                    let opt = document.createElement('option')
                    opt.textContent = ""
                    opt.value = ""
                    pue.append(opt)
                    for(let k = 0; k <= elem.pueblos.length-1; k++){
                        let opt = document.createElement('option')
                        opt.textContent = elem.pueblos[k]
                        opt.value = elem.pueblos[k]
                        pue.append(opt)
                    }
                }
            })
            
        })
    })
})