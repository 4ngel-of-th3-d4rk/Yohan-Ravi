let produtos = ["Teclado", "Mouse", "Webcam", "Monitor"];
produtos.unshift("Headset"); 
let removido = produtos.pop(); 
console.log("Produto removido: " + removido);
console.log("Lista atualizada:", produtos);