const prompt = require("prompt-sync")();
const Livro = require("./Livro");
const livros = [];

let opcao = -1;

while (opcao !== 0) {
  console.log("\n--- BIBLIOTECA ---");
  console.log("1 - Cadastrar livro");
  console.log("2 - Listar livros");
  console.log("3 - Alterar livro");
  console.log("4 - Estatísticas");
  console.log("0 - Sair");

  opcao = parseInt(prompt("Opcao: "));

  if (isNaN(opcao)) {
    console.log("Digite um número válido!");
    continue;
  }

  switch (opcao) {
    case 1:
      let titulo = prompt("Título: ");
      let autor = prompt("Autor: ");
      let genero = prompt("Gênero: ");
      let anoPub = parseInt(prompt("Ano de Publicação: "));
      let numPaginas = parseInt(prompt("Número de páginas: "));

      let novoLivro = new Livro(titulo, autor, genero, anoPub, numPaginas);

      livros.push(novoLivro);

      console.log("Livro cadastrado!");

      break;

    case 2:
      if (livros.length === 0) {
        console.log("Nenhum livro cadastrado!");
      } else {
        livros.forEach((livro, indice) => {
          console.log("[" + indice + "] " + livro.getInfo());
        });
      }

      break;

    case 3:
      break;

    case 4:
      break;

    case 0:
      console.log("Programa encerrado!");
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
}
