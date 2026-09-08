const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  });
entrada.question("digite sua : ", (idade)=>{
     idade= Number(idade)

     idade >= 18 ?     console.log("maior de idade"):
     console.log("menor de idade")
   
})