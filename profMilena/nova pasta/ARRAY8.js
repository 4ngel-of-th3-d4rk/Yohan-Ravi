const readline = require("readline-sync");

const alunos = ["Ana", "Carlos", "João", "Maria"];
console.log("Lista atual:", alunos);
const posicao = Number(readline.question("Digite a posicao que deseja alterar: "));
const novoNome = readline.question("Digite o novo nome: ");
alunos[posicao] = novoNome;

console.log("Lista atualizada:", alunos);