//
const livros = require('./livros-listas');
const menorValor = require('./menor-valor')

for( let atual = 0; atual < livros.length; atual++ ) {
    let menor = menorValor(livros, atual)

    let livroAtual = livros[ atual ];
 console.log('livro atual', livros[ atual ]);
    let livrosMenorPreco  = livros[menor];
console.log('livro menor preco', livros[menor]);
    livros[atual]   = livrosMenorPreco;
    livros[menor] = livroAtual;


}


console.log(livros);
