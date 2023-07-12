// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
//  pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra = "")=>{

    if(!palabra) return console.warn("no has introducido una palabra");
    
    palabra = palabra.toUpperCase();
    let alReves = palabra.split("").reverse().join("");

return (palabra === alReves) 
? console.log(`${palabra} es palindromo, se lee ${alReves}`) 
: console.log(`${palabra} no es palindromo`)
}
palindromo("salas")
