const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
entrada.question("digite a temperatura do ambiente: ", (temperatura)=>{

if (temperatura < 15) {
    alert("Muito frio");
} else if (temperatura <= 24) {
    alert("Frio");
} else if (temperatura <= 30) {
    alert("Agradável");
} else {
    alert("Muito quente");
}

})
