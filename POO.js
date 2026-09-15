class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log (`${this.firstName} ${this.lastName}`);
    }
}

const person = new Person('John', 'Doe', 30);
person.getFullName();

// Herança 

class Animal {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor (name) {
    super(name);
    }   

    speak() {
        console.log(`Dog ${this.name} dog`)
    }
}

const animal = new Animal('Simba');
const dog = new Dog('Marlon')

animal.speak();
dog.speak();