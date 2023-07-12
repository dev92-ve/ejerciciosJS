const conteo = ()=>{
    let contador = 10;
    let intervalo = setInterval(()=>{

        console.log(`el numero es ${contador}`);
        contador --;
        if(contador === 0){
            clearInterval(intervalo);
        }
        
    }, 1000)

    
setTimeout(() => {
    console.log("FELIZ AÑO NUEVO!!!!");
}, 11000); 

}
conteo();