// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function palabraSeparada(palabra, separador){
//     return palabra.split(separador)
// }

// console.log(palabraSeparada("hola que tal", " "));

const palabraSeparada = (palabra = "", separador)=>(!palabra 
    ? console.warn("no es una palabra")
    : (separador === undefined)
    ? console.warn("no ingresaste un separador")
    :console.info(palabra.split(separador)))
    palabraSeparada("hola que tal estas", " ")