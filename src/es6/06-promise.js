//promesas que tendrán que pasar
// resolve o reject
// es una manera de trabajar el asincronismo
//callbacks , promesas y asinc y awave
//callback recibe como parámetro otra función
//promesas pueden pasar hoy mañana o nunca,
//espera del código consecuente según sea el caso
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        } else {
            reject('Whoooops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err)); 

//otro metodo

function cuadradoPromise(value) {
    if (typeof value !== "number") return Promise.reject(`Error el valor "${value}" ingresado no es un número`);
    return new Promise((resolve, reject)=> {
     setTimeout(() => {
        resolve({
            value,
            result: value * value
        });
     }, 0 | Math.random()*1000);
    });
}

cuadradoPromise(0)
    .then(obj => {
        // console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
        })
    .then(obj => {
        // console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
        })
    .then(obj => {
        // console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("3");
        })
    .then(obj => {
        // console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
        })
    .then(obj => {
        // console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
        })
    .then(obj => {
        // console.log(obj);
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log('Fin Promise');
        })
    .catch(err => console.error(err));