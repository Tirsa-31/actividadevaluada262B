function reiniciar(){
    document.getElementById('num').value=' ';
    let display=document.getElementById('display');
    display.textContent="";
    //metodo alternativo location.reload();

} 
function area(){
    let r= +document.querySelector('#num').value; //es un ID por eso lleva # y el + es para que agarre que es numero
    //console.log(r);//se puede usar query.Selector(#"num"),value;
    let opera= Math.PI * Math.pow(r,2);
    let techo=(opera).toFixed(2); //aproximar decimales recorta
    //console.log(techo);
    display.textContent=techo;
    //forma alternativa document.querySelector("#salida").textContent
    }