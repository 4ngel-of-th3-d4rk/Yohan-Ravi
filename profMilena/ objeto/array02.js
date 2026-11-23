const heroi = {
  nome: "Raio Azul",
  poder: "Supervelocidade",
  cidade: "Goiânia",
  energia: 50
};
console.log("Informações originais:");
console.log("Nome:", heroi.nome);
console.log("Poder:", heroi.poder);
console.log("Cidade:", heroi.cidade);
console.log("Energia:", heroi.energia);
heroi.poder = "Invisibilidade";
heroi.energia = 100;
console.log("\nInformações atualizadas:");
console.log("Nome:", heroi.nome);
console.log("Poder:", heroi.poder);
console.log("Cidade:", heroi.cidade);
console.log("Energia:", heroi.energia);