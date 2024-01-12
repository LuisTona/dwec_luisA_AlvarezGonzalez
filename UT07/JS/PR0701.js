const url = "https://swapi.dev/api/planets/"

fetch(url)
    .then(response => response.json())
    .then(data => controlDatos(data));

function controlDatos(data){
        console.log(data);
        // console.log(data.results[1]);
        // console.log(data.results[1].name);
        data.results.forEach(element => {
            let tr = document.createElement('tr');
            document.getElementById('tabla').append(tr);
            
            //Muestra el nombre de los planetas
            let tdname = document.createElement('td');
            tr.append(tdname);
            tdname.textContent = element.name;
            
            //Muestra el diametro de los planetas
            let tdDiameter = document.createElement('td');
            tr.append(tdDiameter);
            tdDiameter.textContent = element.diameter
            
            //Muestra el periodo orbital
            let tdPeriodo = document.createElement('td');
            tr.append(tdPeriodo);
            tdPeriodo.textContent = element.orbital_period;
            
            //Muestra la poblacion
            let tdPoblacion = document.createElement('td');
            tr.append(tdPoblacion);
            tdPoblacion.textContent = element.population; 
        });
        
        // console.log(div);
}
