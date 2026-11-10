const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let destinos = []

function destinosdeviagem(destino){
    destinos.push(destino)
}
rl.question("Digite o primeiro destino:",(destino1)=>{
    destinosdeviagem(destino1)
    rl.question("Digite o segundo destino:",(destino2)=>{
    destinosdeviagem(destino2)
    rl.question("Digite o terceiro destino:",(destino3)=>{
    destinosdeviagem(destino3)
    
    console.log("Destinos cadastrados:",destinos);

    rl.question("Digite outro destino em que você deseja adicionar:",(novodestino)=>{
    destinos.push(novodestino)
   
    console.log("Lista atualizada:",destinos, "Quantidade de destinos", destinos.length);



});
});
});
});

   