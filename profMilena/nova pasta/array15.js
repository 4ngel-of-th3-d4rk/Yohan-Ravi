const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let filme = []

function registrarFilme(filmes){
    filme.push(filmes)
}

rl.question("Digite o primeiro título do filme:",(filmes1)=>{
    registrarFilme(filmes1)
    rl.question("Digite o segundo título do filme:",(filmes2)=>{
    registrarFilme(filmes2)
     rl.question("Digite o terceiro título do filme:",(filmes3)=>{
    registrarFilme(filmes3)
    rl.question("Digite o quarto título do filme:",(filmes4)=>{
    registrarFilme(filmes4)
   
console.log("¨Todos os filmes registrados:",filme)
console.log(filme.length)

});
});
});
});