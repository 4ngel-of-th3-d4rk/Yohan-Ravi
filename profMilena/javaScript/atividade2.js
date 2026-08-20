const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question("digite seu nome: ", (nome) => {
    entrada.question("digite sua idade:", (idade) => {
        entrada.question("digite sua cidade:", (cidade) => {

            console.log("ola," , nome , '!');
            console.log("voce mora em", cidade, " e tem ", idade, "anos de idade");
        })
    })
})