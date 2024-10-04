
function dado(){
    let mult = document.getElementById('num');
    let display =document.getElementById('salida');
    let operation=Math.ceil(Math.random()*mult.value);
    display.textContent =operation;

}


