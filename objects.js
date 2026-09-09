const person = {
    firstName: "Gustavo",
    lastName: "Silva",
    age: "21",
    hobbies: ["Programação", "Jogar Vôlei", "Vídeo-Game"],
    dog: {
        name: "Simba",
        age: "4"
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

const {firstName, lastName, age, hobbies} = person;

console.log(`Meu nome é ${firstName} ${lastName}`);
console.log(`Eu tenho ${age} anos`);
console.log(`Eu gosto de ${hobbies}`);

console.log(person);

const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },

    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },

    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
];

const description = todos[2].description;

console.log(description);