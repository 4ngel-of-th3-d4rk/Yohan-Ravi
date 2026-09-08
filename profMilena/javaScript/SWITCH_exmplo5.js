const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  });
entrada.question("digite sua nota: ", (nota)=>{
     nota= Number(nota)

     nota >= 6 ?     console.log("acima da media"):
     console.log("abaixo da media")
})