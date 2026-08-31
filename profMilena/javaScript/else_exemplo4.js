const readline = require("readline");


const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
entrada.question("digite sua senha: ", (senha)=>{
     senha = Number(senha)

if (senha === "1234") {
    alert("Acesso permitido!");
} else {
    alert("Senha incorreta!");
}

})