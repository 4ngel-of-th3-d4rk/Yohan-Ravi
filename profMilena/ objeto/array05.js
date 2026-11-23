const perfil = {
  nome: "Ana",
  usuario: "@ana.dev",
  biografia: "Estudante",
  seguidores: 120
};
console.log("Perfil original:");
console.log("Nome:", perfil.nome);
console.log("Usuário:", perfil.usuario);
console.log("Biografia:", perfil.biografia);
console.log("Seguidores:", perfil.seguidores);
perfil.biografia = "Desenvolvedora em formação";
perfil.seguidores = 150;
console.log("\nPerfil atualizado:");
console.log("Nome:", perfil.nome);
console.log("Usuário:", perfil.usuario);
console.log("Biografia:", perfil.biografia);
console.log("Seguidores:", perfil.seguidores);