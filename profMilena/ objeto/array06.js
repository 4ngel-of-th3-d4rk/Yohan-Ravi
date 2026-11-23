const mala = {
  cor: "Azul",
  peso: 10,
  rodinhas: true,
  destino: "Brasília"
};
console.log("Cor:", mala.cor);
console.log("Peso:", mala.peso, "kg");
console.log("Possui rodinhas:", mala.rodinhas);
console.log("Destino:", mala.destino);
mala.destino = "Rio de Janeiro";
mala.peso = 12;
console.log("\nInformações atualizadas:");
console.log("Cor:", mala.cor);
console.log("Possui rodinhas:", mala.rodinhas);
console.log("Novo destino:", mala.destino);
console.log("Novo peso:", mala.peso, "kg");