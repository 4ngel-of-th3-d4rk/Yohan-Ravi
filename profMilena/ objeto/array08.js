const filme = {
  titulo: "Aventura no Espaço",
  genero: "Ficção científica",
  ano: 2025,
  duracao: 120
};

function exibirFilme(objFilme) {
  console.log("Título:", objFilme.titulo);
  console.log("Gênero:", objFilme.genero);
  console.log("Ano:", objFilme.ano);
  console.log("Duração:", objFilme.duracao, "minutos");
}

exibirFilme(filme);