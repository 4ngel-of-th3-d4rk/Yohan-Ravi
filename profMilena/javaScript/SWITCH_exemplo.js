const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  });

  console.log("FORMA DE PAGAMENTO")
console.log("1 CARTAO")
console.log("2 PIX")
console.log("3 DINHEIRO")

entrada.question("digite a forma de pagamento : ", (opcao)=>{

    opcao = Number(opcao) 
    switch(opcao){
        case 1:
            console.log("PAGAMENTO SELECIONADO, CARTAO")
            break;
            case 2:
                 console.log("PAGAMENTO SELECIONADO, pix")
         break;
            case 3:
                 console.log("PAGAMENTO SELECIONADO, dinheiro")
     break;
     default:
    console.log("opcao invalida")
    }
})