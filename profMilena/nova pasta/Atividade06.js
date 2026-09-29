const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function verificarSituacao(nota){
    return nota >= 6 ? "Aprovado" : "Reprovado"
}
entrada.question("Digite a nota do aluno: ",(nota)=>{
    nota  = Number(nota)
    console.log(verificarSituacao(nota))
})