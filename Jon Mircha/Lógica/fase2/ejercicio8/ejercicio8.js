// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
// miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracter = (palabra = "", patron)=>{
    //palabra.replace tiene dos argumentos, el regex y en este caso una expresion vacia,
    //que indica que no sustituira con nada, o mas bien, reemplazara cono un caracter vacío
    console.log(palabra.replace(new RegExp(patron, "ig"), ""));
}
eliminarCaracter("xyz1, xyz2, xyz3", "yz")