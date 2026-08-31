const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
entrada.question("digite o nome do cliente: ", (nome)=>{
    entrada.question("digite o saldo disponivel: ", (saldo)=>{
entrada.question("digite o valor do saque: ", (saque)=>{
 saldo = Number(saldo)
 saque = Number(saque)

    if (saque > saldo) {
    console.log("Saldo insuficiente.");
} else {
   
   let novoSaldo = saldo - saque;
    console.log("Novo saldo de " + nome + ": R$ " + novoSaldo);
}
})
})
});