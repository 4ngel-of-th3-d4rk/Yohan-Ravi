const readline = require("readline")
const entrada = readline;readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question("digite seu nome: ", (nome)=>{
    console.log("ola," + nome);
});