function cuadradoPromise(value){
if ((Math.sign(value)=== -1)) {
    return Promise.reject(`el número ${value} es negativo, solo funciona con numeros positivos`)
}
if(typeof value !== "number"){
    return Promise.reject(`el dato ${value} no es un número, es un string`)
}
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            value,
            result: value*value
        })
    }, 0 | Math.random() * 100)
}) 
}

cuadradoPromise(Math.floor(Math.random()* (90-10+1)-10))
.then((obj)=>{
    console.log("Inicio de promesa");
    console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);
return cuadradoPromise(Math.floor(Math.random()* (50-1+1)-1))
.then((obj)=>{

    console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);
return cuadradoPromise(Math.floor(Math.random()* (50-10+1)-10))
.then((obj)=>{
    console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);
    console.log("fin de promesa");
        })
    })
})
.catch((error)=> console.log(error))