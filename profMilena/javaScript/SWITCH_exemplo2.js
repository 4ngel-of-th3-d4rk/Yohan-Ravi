const readline = require("readline");
const entrada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  });

  console.log("selecione o turno")
console.log("1 manha")
console.log("2 noite")
console.log("3 tarde")

entrada.question("escolha o turno : ", (opcao)=>{

    opcao = Number(opcao) 
    switch(opcao){
        case 1:
            console.log("turno SELECIONADO, manha")
            break;
            case 2:
                 console.log("turno SELECIONADO, noite")
         break;
            case 3:
                 console.log("turno SELECIONADO, tarde")
     break;
     default:
    console.log("opcao invalida")
    }
})