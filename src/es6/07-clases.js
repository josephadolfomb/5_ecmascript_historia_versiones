//declarando
class User {};
//instancia de una clase
// const newUser = new User();

class user {
    //métodos:
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const developer = new user();
console.log(developer.greeting());

//constructor 

class user {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this 

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());
//clases una forma de trabajar con constructores
//estructuras(constructores y métodos)
//getter y setters, obtener y guardar elementos

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // métodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const developer1 = new user('David', 15);
console.log(developer1.uAge);
console.log(developer1.uAge = 20);