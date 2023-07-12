// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.



//let eleccion = Math.floor(Math.random() * (max- min + 1) + min)

const eleccion = ()=> {
    
let min = 501;
let max = 600; 
    console.log(Math.floor(Math.random()* (max-min+1) + min));}
eleccion();