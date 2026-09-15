const sum = 1 + 2;

if (sum === 2) {
    console.log("A soma é 2");
} 

else if (sum === 3) {
    console.log("A soma é 3");
} 

else {
    console.log("A soma não é 2");
}

const sum1 = 1 + 1;
const sum2 = 3 + 3;

let number;

// if (sum1 === 2) {
//     number = 2;
// } else {
//     number = 4
// }

// Mesma coisa que acima, mas de uma forma mais simplificada
number = sum1 === 2 ? 2 : 4;

console.log(number);

// if (sum1 === 4 && sum2 === 6) {
//     console.log("A soma é 4 e 6");
// } // Lê as duas condições e só executa o código se as duas forem verdadeiras

// if (sum1 === 4 || sum2 === 6) {
//     console.log("A soma é 4 ou 6");
// } // Lê as duas condições e executa o código se pelo menos uma for verdadeira

const car = prompt("What is your favorite car?");

switch (car.toLowerCase()) {
    case "mercedes":
        console.log("Mercedes is beautiful");
        break;
    case "ferrari":
        console.log("Ferrari is very fast");
        break;
    case "tesla":
        console.log("Tesla is very smart");
}