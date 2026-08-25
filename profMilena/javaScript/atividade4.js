const readline = require("readline")
const entrada = readline;readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question("digite nome o jogador: ", (nome) => {
    entrada.question("digite sua pontuaçao:", (pontuaçao) => {
         entrada.question("digite sua pontuaçao bonus:", (bonus) => {

            pontuaçao = Number (pontuaçao)
            bonus = Number (bonus)

            const pontuaçaofinal = pontuaçao + bonus;
            console.log("jogador:", nome);
            console.log("pontuaçao final: ", pontuaçaofinal );
            entrada.close();

       })
   })
})