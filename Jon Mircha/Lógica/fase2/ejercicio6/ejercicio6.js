// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const palabraRepetida = (cadena= "",texto= "")=>{
    if (!cadena) console.warn("no has introducido una cadena");
    if (!texto) console.warn("no es un texto");

    let i = 0;
    let contador = 0;
    while (i!== -1){
        i = cadena.indexOf(texto, i);
        if(i!== -1){
        i++;
        contador ++;
        }
        
    }
    
return console.info(` ${texto} se repite ${contador} veces`);
}
palabraRepetida("hola que hola hola hola", "hola")