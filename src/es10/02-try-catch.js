try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}

//caso de uso muy particular lo ideal es 
//manejar el error dará más datos.