const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cadastrarProduto(nome, preco, quantidade, categoria) {
  const produto = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
    categoria: categoria
  };
  return produto;
}

rl.question("Digite o nome do produto: ", (nomeInput) => {
  rl.question("Digite o preço do produto: ", (precoInput) => {
    rl.question("Digite a quantidade em estoque: ", (quantidadeInput) => {
      rl.question("Digite a categoria do produto: ", (categoriaInput) => {
        const precoNumero = Number(precoInput);
        const quantidadeNumero = Number(quantidadeInput);

        const produtoCadastrado = cadastrarProduto(
          nomeInput,
          precoNumero,
          quantidadeNumero,
          categoriaInput
        );

        console.log("\nProduto cadastrado com sucesso!");
        console.log("Nome:", produtoCadastrado.nome);
        console.log("Preço: R$", produtoCadastrado.preco);
        console.log("Quantidade em estoque:", produtoCadastrado.quantidade);
        console.log("Categoria:", produtoCadastrado.categoria);

        rl.close();
      });
    });
  });
});