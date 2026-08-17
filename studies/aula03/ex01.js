const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Programa iniciado!");

rl.question("Qual é o seu nome? ", (nome) => {
    console.log(nome);
});