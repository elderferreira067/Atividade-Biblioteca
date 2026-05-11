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
      if (livros.lengh === 0) {
        console.log("Nenhum livro cadastrado!");
        break;
      }

      console.log("\nLivros disponíveis: ");
      livros.forEach(function (livro, indice) {
        console.log("[" + indice + "] " + livro.getInfo());
      });

      let indice = parseInt(prompt("Digite o índice do livro: "));

      if (isNaN(indice) || indice < 0 || indice >= livros.length) {
        console.log("índice inválido!");
        break;
      }

      let livro = livros[indice];

      let novoTitulo = prompt("Título (" + livro.titulo + "): ");
      if (novoTitulo.trim() !== "") {
        livro.titulo = novoTitulo;
      }

      let novoAutor = prompt("Autor (" + livro.autor + "): ");
      if (novoAutor.trim() !== "") {
        livro.autor = novoAutor;
      }

      let novoGenero = prompt("Gênero (" + livro.genero + "): ");
      if (novoGenero.trim() !== "") {
        livro.genero = novoGenero;
      }

      let novoAno = prompt("Ano(" + livro.anoPub + "): ");
      if (novoAno.trim() !== "") {
        livro.anoPub = parseInt(novoAno);
      }

      let novasPaginas = prompt("Páginas (" + livro.numPaginas + "): ");
      if (novasPaginas.trim() !== "") {
        livro.numPaginas = parseInt(novasPaginas);
      }

      console.log("Livro alterado!");

      break;

    case 4:
      if (livros.length === 0) {
        console.log("Nenhum livro cadastrado!");
        break;
      }

    let auxiliar = new Livro();
    let generos = auxiliar.contarPorGenero(livros);
    console.log("\nQuantidade por gênero: ");
      for (let genero in generos) {
        console.log(genero + ": " + generos[genero]);
      }

      let media = Number(auxiliar.mediaNumPaginas(livros));

      console.log("\nMédia de páginas: " + media.toFixed(2));
    
      break;

    case 0:
      console.log("Programa encerrado!");
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
}

//Finalizado. Fiz pelo celular no replit, To sem pc por enquanto