// 2 reestruccturacion arrays y objetos
//arrays destructuring
//más amigable

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = {username: 'Oscar', age: 34};
let {username, age} = user;
console.log(username, user.age);

// spread operator

let person = {name:'Oscar', age: 28 };
let country = 'MX';

let data = {id:1, ...person, country};
console.log(data);

//rest parameter
// dan ventaja para usar arreglos objetos etc

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

// Ejercicio:
// En este deafío recibirás dos objetos JSON por parámetros.

// Usando el spread operator, deberás combinar ambos objetos en uno solo. Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:

// JSON 1:

// {
//     name: "Mr. Michi",
//     food: "Pescado"
// }

// JSON 2:

// {
//     age: 12,
//     color: "Blanco"
// }

// La solución deberá tener un input y output como la siguiente, recuerda que se te pueden o no envíar los parámetros.

// Input:

// solution({
//     name: "Bigotes",
//     food: "Pollito"
// }),

// Output:

// {
//     name: "Bigotes",
//     food: "Pollito",
//     age: 12,
//     color: "Blanco"
// }

function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
}, json2 = {
    age: 12,
    color: "Blanco"
}) {
    let output = { ...json1, ...json2 };
    console.log(output);
}

solution({"name":"Atena","food":"Leche"}, {"age":2,"color":"Café"});

