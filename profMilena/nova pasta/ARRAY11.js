const readline = require("readline-sync");
const alunos = [];
function cadastrarAluno(nome, idade) {
    const aluno = { nome: nome, idade: idade };
    alunos.push(aluno);
}
for (let i = 1; i <= 3; i++) {
    const nome = readline.question(`Digite o nome do aluno ${i}: `);
    const idade = Number(readline.question(`Digite a idade do aluno ${i}: `));
    cadastrarAluno(nome, idade);
}
console.log("Alunos cadastrados:", alunos);