const readline = require("readline-sync");
const alunos = [];
function cadastrarAluno(nome, idade) {
    alunos.push({ nome, idade });
}
for (let i = 1; i <= 3; i++) {
    console.log(`--- Cadastro do Aluno ${i} ---`);
    const nome = readline.question("Nome: ");
    const idade = Number(readline.question("Idade: "));
    cadastrarAluno(nome, idade);
}
console.log("\nAlunos cadastrados com sucesso:");
console.log(alunos);