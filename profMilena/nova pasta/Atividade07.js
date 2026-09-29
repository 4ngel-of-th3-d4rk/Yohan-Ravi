const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function verificarCompra(produto, dinheiro) {
    return dinheiro >= produto ? "Compra realizada!" : "Dinherio insuficiente!"
}
entrada.question("Digite o dinheiro disponivel: ", (dinheiro) => {
    entrada.question("Digite o valor do produto: ", (produto) => {

        dinheiro = Number(dinheiro)
        produto = Number(produto)
        console.log(verificarCompra(produto, dinheiro))
    })
})