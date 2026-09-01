const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
entrada.question("digite sua : ", (idade)=>{
     idade= Number(idade)
if (idade >= 16) {
    console.log("Entrada permitida!");
} else {
   console.log("Entrada não permitida!");
}
})
