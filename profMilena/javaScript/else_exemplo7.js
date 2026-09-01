const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("escolha sua bebida")
console.log(" digite 1 para refrigerante")
console.log("digite 2 para suco")
entrada.question("digite a bebida escolhida : ", (opcao)=>{

  if (opcao === "1") {
    console.log("Você escolheu Refrigerante.");
} else {
    console.log("Você escolheu Suco.");
}
})