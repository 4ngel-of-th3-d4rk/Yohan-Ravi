const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let gastos = []

function registrarGastos(valorgasto){
    gastos.push(valorgasto)
}

rl.question("Digite o primeiro valor gasto:",(valorgasto1)=>{
    valorgasto1 = Number(valorgasto1)
    registrarGastos(valorgasto1)
    rl.question("Digite o segundo valor gasto:",(valorgasto2)=>{
    valorgasto2 = Number(valorgasto2)
    registrarGastos(valorgasto2)
    rl.question("Digite o terceiro valor gasto:",(valorgasto3)=>{
    valorgasto3 = Number(valorgasto3)
    registrarGastos(valorgasto3)
    rl.question("Digite o quarto valor gasto:",(valorgasto4)=>{
    valorgasto4 = Number(valorgasto4)
    registrarGastos(valorgasto4)
    
    console.log("Valores registrados:",gastos, "Quantidade de valores registrados",gastos.length)
});
});
});
});