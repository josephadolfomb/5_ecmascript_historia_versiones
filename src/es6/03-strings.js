//template literal: concatenar strings de una forma más amigable y permitir jugar con variables y elementos.
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//template literals:
//comillas francesas
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-line strings
let lorem = 'esto es un string \n' + 'esto es otra linea'; //no es amigable y hay que concatenar.
let lorem2 = `Esta es una frase épica
Esto es la continuación de esa frase épica.
`; //string literals

console.log(lorem);
console.log(lorem2);