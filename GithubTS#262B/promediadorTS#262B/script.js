function prome(){
    let nt1=+document.getElementById('nota1').value;
    let nt2=+document.getElementById('nota2').value;
    let nt3=+document.getElementById('nota3').value;
    let show = document.getElementById('salida');
    let promer=(nt1*0.35)+(nt2*0.35)+(nt3*0.3);
    let f= document.getElementById('frase');

if(promer>=6 && promer <=10){
show.textContent= promer + ' Aprobaste!!!'
}
else if(promer >= 1 && promer < 6){
    show.textContent= promer + ' No aprobaste'
    }
else{
show.textContent='Ingrese notas reales'
}




if (promer >= 9 && promer<=10){
    f.textContent='Excelente desempeño'
}
else if (promer>=7 && promer<9){
    f.textContent='muy buen desempeño'
}
if (promer >= 6 && promer<7){
    f.textContent='Aprobaste pero necesitas mejorar'
}
else if (promer >= 4 && promer<6){
    f.textContent='Necesitas esforzarte más'
}
if  (promer >= 1 && promer<4){
    f.textContent='...'
}
}