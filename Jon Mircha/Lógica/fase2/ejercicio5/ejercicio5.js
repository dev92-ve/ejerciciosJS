// // 5) Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH"

const alReves = (palabra = "")=> {
    if (!palabra){
        console.warn("No ingresaste una palabla");
    } 
     if(!isNaN(palabra)) console.warn("Has ingresado un número");
     
    console.log(palabra.split("").reverse().join("").toLowerCase().trim());

}
 alReves("   esto es un texto largo   ")

