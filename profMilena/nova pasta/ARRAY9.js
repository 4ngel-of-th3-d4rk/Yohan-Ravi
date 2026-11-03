const alunos = [];
function cadastrarAluno(nome) {
    alunos.push(nome);
}
cadastrarAluno("Ana");
cadastrarAluno("Carlos");
cadastrarAluno("João");
console.log("Alunos cadastrados:", alunos);