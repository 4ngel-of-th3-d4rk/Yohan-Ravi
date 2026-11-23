const produto1 = {
  nome: "Teclado Gamer",
  preco: 150,
  marca: "HyperTech"
};

function exibirProduto(item) {
  console.log("Nome:", item.nome);
  console.log("Preço: R$", item.preco);
  console.log("Marca:", item.marca);
}

exibirProduto(produto1);

// Desafio extra
console.log("---");
const produto2 = {
  nome: "Mouse Sem Fio",
  preco: 90,
  marca: "LogiPro"
};

exibirProduto(produto2);