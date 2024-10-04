function compra(){
    let costos = document.getElementById("precio").value;
    let exit= document.getElementById("salida");
    //exit.textContent=costos;
    if(costos==6||costos==12){
    let priceini=costos*5;
    let priceinter=priceini*0.25
    let finalprice=priceini-priceinter
    exit.textContent="Tu total es de = "+finalprice 
    }
    else if (costos==1||costos==2){
        let priceini=costos*5;
        let priceinter=priceini*0.1
        let finalprice=priceini-priceinter
        exit.textContent="Tu total es de = "+finalprice 
    }
    else if (costos==3||costos==4){
        let priceini=costos*5;
    let priceinter=priceini*0.1
    let finalprice=priceini-priceinter
    exit.textContent="Tu total es de = "+finalprice 
    }
    else if (costos==5||costos==7){
        let priceini=costos*5;
    let priceinter=priceini*0.1
    let finalprice=priceini-priceinter
    exit.textContent="Tu total es de = "+finalprice 
    }
    else if (costos==8||costos==9){
        let priceini=costos*5;
    let priceinter=priceini*0.1
    let finalprice=priceini-priceinter
    exit.textContent="Tu total es de = "+finalprice 
    }
    else if (costos==10||costos==11){
        let priceini=costos*5;
    let priceinter=priceini*0.1
    let finalprice=priceini-priceinter
    exit.textContent="Tu total es de = "+finalprice 
    }

else{
        exit.textContent='No se puede llevar ese numero de productos por favor ingrese otra cantidad '   
}
}