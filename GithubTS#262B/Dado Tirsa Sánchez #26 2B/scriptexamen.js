function exam() {
    let minimo = document.getElementById('minimo').value;
    let maximo = document.getElementById('maximo').value;
    let salida = document.getElementById('exit');

    let res = Math.round(Math.random() * (maximo - minimo + 1)+minimo);
    salida.textContent = res;  
}