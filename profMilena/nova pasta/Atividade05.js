const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2
    return media
}

entrada.question("Digite a primeira nota: ",(nota1)=>{
    entrada.question("Digite a segunda nota: ",(nota2)=>{
        nota1 = Number(nota1)
        nota2 = Number(nota2)

        console.log("Sua média é: " ,calcularMedia(nota1,nota2) )
    })
})


