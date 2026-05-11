const prompt = require('prompt-sync')();
const Livro = require('./Livro');
const Livro = [];

let opcao = -1;

while (opcao !== 0) {

    console.log("\n--- BIBLIOTECA ---");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Alterar livro");
    console.log("4 - Estatísticas");
    console.log("0 - Sair");

  opcao = parseInt(prompt("Opcao: "));

  if(isNaN(opcao)){
    console.log("Digite um número válido!");
    continue;
  }

}
