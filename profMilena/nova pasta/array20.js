const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tarefas = []

function adicionartarefa(descricao){
    tarefas.push(descricao)
}

rl.question("Digite a primeira tarefa:",(tarefa1)=>{
    adicionartarefa(tarefa1)
    rl.question("Digite a segunda tarefa:",(tarefa2)=>{
    adicionartarefa(tarefa2)
    rl.question("Digite a terceira tarefa:",(tarefa3)=>{
    adicionartarefa(tarefa3)
    rl.question("Digite a quarta tarefa:",(tarefa4)=>{
    adicionartarefa(tarefa4)
    console.log("Lista de tarefas",tarefas);

    rl.question("Digite uma posição",(posicao)=>{
        posicao = Number(posicao)
        posicao = tarefas(posicao)
    
    function removertarefa(){
        return tarefas.pop 
       
    }


    });
});
});
});
});