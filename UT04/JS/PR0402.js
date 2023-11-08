{/* <div id="months">
<div class="month">
    <div class="month-number">1</div>
    <div class="month-name">Enero</div>
<div>
<!-- Igual para todos los meses -->
</div> */}

function nombreMes(numero){
    let fecha = new Date();
    fecha.setMonth(numero - 1);
    return new Intl.DateTimeFormat('es-ES', {month: 'long'}).format(fecha);
}

let months = document.getElementById('months');

let month = document.createElement('div');
month.className = 'month';
months.appendChild(month);

for(let k = 1; k <= 12; k++){
    // monthName.innerHTML += nombreMes(k) +"<br>";
    // monthNumber.innerHTML += k +"<br>";
    let monthNumber = document.createElement('div');
    monthNumber.className = 'month-number';
    month.appendChild(monthNumber);
    monthNumber.innerHTML = k;

    let monthName = document.createElement('div');
    monthName.className = 'month-name';
    month.appendChild(monthName);
    monthName.innerHTML = nombreMes(k);
}