// 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
//indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// function recortarLetras(text, numeroCaracteres){
//     return text.slice(0, numeroCaracteres);
    
// }
// console.log(recortarLetras("hola mundo", 8));
const recortarLetras = (text = "", longitud = undefined)=>
( !text ? console.warn("no es texto válido") 
: (longitud===undefined) 
? console.warn("no son validos los parametros")
: console.log(text.slice(0, longitud)))
recortarLetras("esto es un texto", 6)