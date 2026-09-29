const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function somar(numero1,numero2){
return numero1 + numero2
}
entrada.question("Infome o primeiro número: ",(numero1)=>{
entrada.question("Informe o segundo número: ",(numero2)=>{
    numero1=Number(numero1)
    numero2=Number(numero2)
    console.log("O resultaado da sua soma é: ",somar(numero1,numero2))
    
})
})
