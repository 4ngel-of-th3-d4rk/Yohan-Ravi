const produto = {
  nome: "Hambúrguer",
  preco: 18,
  categoria: "Lanches"
};
console.log("Produto:", produto.nome);
console.log("Preço original: R$", produto.preco);
console.log("Categoria:", produto.categoria);
produto.preco = 20;
console.log("Novo preço: R$", produto.preco);