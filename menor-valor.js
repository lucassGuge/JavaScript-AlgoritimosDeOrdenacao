//
const livros = require('./livros-listas');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){

    if (livros[atual].preco <  livros[maisBarato].preco){

        maisBarato = atual;

    }

}

console.log(`O livro maisBarato: ${livros[maisBarato].preco}
    e o titulo é ${livros[maisBarato].titulo}`); 