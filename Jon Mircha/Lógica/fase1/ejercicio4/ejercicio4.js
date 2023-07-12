// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// function palabraRepetida(cadena, repetidor){
//     return cadena.repeat(repetidor)
// }
// console.log(palabraRepetida("hola mundo" + " ", 3));
const palabraRepetida = (cadena= "", repetidor)=>{
if (!cadena) return console.warn("no hay una cadena"); 
if (repetidor === undefined) return console.warn("no has introducido un repetidor");
if (repetidor === 0) console.error("0 no es válido");
if (repetidor === 1) console.warn("la palabra sólo se mostrará una sola vez")
if(Math.sign(repetidor)=== -1) console.error("Has introducido un numero negativo");

for (let i = 1; i <= repetidor; i++){
    console.log(`${cadena}, ${i}`);
}

}

palabraRepetida("hola", 5)