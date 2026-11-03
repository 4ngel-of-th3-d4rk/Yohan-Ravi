const readline = require("readline-sync");

const alunos = [];

alunos.push(readline.question("Digite o nome do primeiro aluno: "));
alunos.push(readline.question("Digite o nome do segundo aluno: "));
alunos.push(readline.question("Digite o nome do terceiro aluno: "));

console.log("Alunos cadastrados:", alunos);