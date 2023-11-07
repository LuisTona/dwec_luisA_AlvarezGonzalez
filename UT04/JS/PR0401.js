{/* <div id="numbers">
    <span class="number">1</span>
    <span class="number">2</span>
    <span class="number">3</span>
</div> */}
let div = document.getElementById('numbers');
let span = "";
    for(let k = 1; k < 31; k++){
        span +='<span class="number">'+ k +'</span>';
    }

div.innerHTML = span;
