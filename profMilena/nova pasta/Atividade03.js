const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarDados(nome,idade) {
console.log("Olá" ,nome,"! você tem ",idade,"anos")
}
entrada.question("Informe seu nome: " ,(nome)=>{
entrada.question("Informe sua idade: ",(idade)=>{
    idade=Number(idade)
    mostrarDados(nome,idade)
})
})