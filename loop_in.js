let index = 0;

while (index < 10) {
    console.log("Index é menor que 10");
    index = index + 1;
}

const person = {
    name: "Gustavo",
    age: 21,
}

for (let property in person) {
    console.log(person[property]);
}