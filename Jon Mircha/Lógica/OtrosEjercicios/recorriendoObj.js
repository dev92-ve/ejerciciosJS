let user = {
    nombre: "Jose",
    apellido: "Moreno",
    telefono: 4128330271,
    isAbogado: true
}

let transform = Object.entries(user).forEach(([key, value]) =>{
    console.log(`${key.toUpperCase()} -- ${value}`);
}

)

console.log(transform);