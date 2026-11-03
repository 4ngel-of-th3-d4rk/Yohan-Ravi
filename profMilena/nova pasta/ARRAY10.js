const readline = require("readline-sync");
const notas = [];
function cadastrarNota(nota) {
    notas.push(nota);
}
for (let i = 1; i <= 5; i++) {
    const nota = Number(readline.question(`Digite a nota ${i}: `));
    cadastrarNota(nota);
}
console.log("Notas cadastradas:", notas);