// 10) Programa una función que reciba un número y evalúe si es capicúa o no
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero= 0)=>{
    if (!numero) console.warn("NO has ingresado un número");
    if (typeof numero !== "number") console.error(`el numero ${numero} NO es un número`);
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("")


    return(numero !== alReves) 
    ? console.log(`el ${numero} NO es capicua, al reves es ${alReves}`)
    : console.log(`el ${numero} es capicua. al reves es ${alReves}`);
}

capicua(505)
capicua(490)
capicua(2000)
