var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

//var global
//let alcance de bloque
//const alcance de bloque

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; //global function scope
        let fruit2 = 'Kiwi';//local, block scope
        const fruit3 = 'Banana';//local, block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();