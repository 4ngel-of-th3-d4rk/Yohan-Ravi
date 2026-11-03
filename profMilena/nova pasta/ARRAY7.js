const readline = require("readline-sync");

const compras = [];
 
for (let i = 1; i <= 4; i++) {
    compras.push(readline.question(`Digite o produto ${i}: `));
}
console.log("Lista inicial:", compras);

// 5 e 6. Peça mais um produto e adicione
const novoProduto = readline.question("Digite outro produto: ");
compras.push(novoProduto);


console.log("Lista atualizada:", compras);