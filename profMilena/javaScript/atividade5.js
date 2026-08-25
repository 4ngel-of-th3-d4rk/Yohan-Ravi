const readline = require("readline")
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question("digite seu nome: ", (nome)=>{
    entrada.question("digite os pontos da primeira partida: ", (pontos1)=>{
entrada.question("digite os pontos da segunda partida: ", (pontos2)=>{
    pontos1 = Number(pontos1)
    pontos2 = Number(pontos2)
    const total = pontos1 + pontos2
    console.log("jogador ",nome)
    console.log("pontuaçao total ", total)
    console.log("pontuaçao e maior ou igual 100? ",total>=100)
    console.log("as duas pontuaçoes tiveram pelo menos 30 pontos", pontos1 >= 30 && pontos2 >= 30)
})
    })
})