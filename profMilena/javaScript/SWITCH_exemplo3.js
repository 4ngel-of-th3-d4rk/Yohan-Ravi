const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  });

  console.log("tamanhos de pizza")
console.log("1 pequena")
console.log("2 media")
console.log("3 grande")

entrada.question("escolha o tamanho : ", (opcao)=>{

    opcao = Number(opcao) 
    switch(opcao){
        case 1:
            console.log("SELECIONADO, pequena")
            break;
            case 2:
                 console.log("SELECIONADO, media")
         break;
            case 3:
                 console.log("SELECIONADO, grande")
     break;
     default:
    console.log("opcao invalida")
    }
})