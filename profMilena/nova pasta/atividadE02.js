const readline = require("readline")
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function saudaraluno(nome){
    console.log("ola ",nome,"! seja bem vindo")
}
entrada.question("digite o nome do aluno: ", (nome)=>{
saudaraluno(nome)
})