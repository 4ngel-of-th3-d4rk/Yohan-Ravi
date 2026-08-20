const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 entrada.question("digite sua idade:", (idade) => {
    idade = Number(idade)
    console.log( idade + 1345)
    entrada.close

 })