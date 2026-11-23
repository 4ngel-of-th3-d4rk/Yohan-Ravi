const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cadastrarPersonagem(nome, idade, poder) {
  const personagem = {
    nome: nome,
    idade: idade,
    poder: poder
  };
  return personagem;
}

rl.question("Digite o nome do personagem: ", (nomeInput) => {
  rl.question("Digite a idade: ", (idadeInput) => {
    rl.question("Digite o poder: ", (poderInput) => {
      const idadeNumero = Number(idadeInput);
      const novoPersonagem = cadastrarPersonagem(nomeInput, idadeNumero, poderInput);

      console.log("\nPersonagem cadastrado!");
      console.log("Nome:", novoPersonagem.nome);
      console.log("Idade:", novoPersonagem.idade);
      console.log("Poder:", novoPersonagem.poder);

      rl.close();
    });
  });
});