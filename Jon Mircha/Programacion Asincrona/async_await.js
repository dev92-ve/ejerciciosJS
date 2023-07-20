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

    async function asincronia (){
        try {
            console.log("inicio de funcion asincrona");
            let obj = await cuadradoPromise(2);
            console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);

            obj = await cuadradoPromise(4);
            console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);

            obj = await cuadradoPromise(16);
            console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);

            obj = await cuadradoPromise("32 ");
            console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);

            obj = await cuadradoPromise(5);
            console.log(`${obj.value} * ${obj.value} da como resultado ${obj.result}`);
        } catch (error) {
            console.error(error);
        }
        
    }
    asincronia();