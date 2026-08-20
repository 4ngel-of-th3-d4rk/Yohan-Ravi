const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question("digite seu nome: ", (nome) => {
    entrada.question("digite o nome do seu curso:", (curso) => {
        entrada.question("digite sua materia:", (materia) => {
            entrada.question("digite seu turno: ", (turno) => {

            console.log("ola," , nome , '!');
            console.log("Voce estuda ", materia, " no curso de ", curso,);
            console.log("seu turno e",turno)
        })
        })
    })
})