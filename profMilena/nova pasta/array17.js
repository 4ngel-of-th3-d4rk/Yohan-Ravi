const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let rotina = ["limpar a casa", "Lavar a louça", "Arrumar a cama", "Escovar os dentes", "Cozinhar em casa"];

console.log("Atividades:",rotina);

rl.question("Digite a posição em que você deseja substituir:",(posicao)=>{
    posicao= Number(posicao);

    rl.question("Digite o nome da nova atividade:",(novonomedaposicao)=>{
        rotina[posicao] = novonomedaposicao

console.log("Rotina atualizada",rotina);

    });
});