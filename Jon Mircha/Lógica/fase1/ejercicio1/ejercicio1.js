

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// function contarLetras (str=""){
// if(!str){
//     console.warn("no es cadena");
// }
// else (
//     console.info(`la cadena ${str} tiene ${str.length} caracteres`)
// )
// }
const contarLetras = (str="")=>(!str) ? console.warn("no es cadena") : console.info(`la cadena ${str} tiene ${str.length} caracteres`)

contarLetras("esta frase es de prueba");









