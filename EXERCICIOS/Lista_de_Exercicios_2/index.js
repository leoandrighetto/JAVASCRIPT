// Somar Todos os Elementos de um Array

// let array = [1,2,3,4,5];

// let soma = 0
// array.forEach((numero) => soma+=numero
// );

// console.log(soma);

// //Multiplicar Cada Elemento por um Valor Específico
 
// let array = [1,2,3,4];
// let novo_array = array.map((numero) => numero*2);
// console.log(novo_array.toString())

// Converter um Array de Celsius para Fahrenheit

// let array = [0,20,30];

// let novo_array = array.map((numero) => (numero*1.8)+32);
// console.log(novo_array);

//Criar um array de strings de saudação

// let array = ['Leo','Lena','Luc'];

// let saudacoes = array.map((nome) => "Olá, " + nome + "!");

// console.log(saudacoes);

//filtrar números pares 

// let array = [1,2,3,4,5,6];

// let novo_array = array.filter((numero) => numero %2 ===0);

// console.log(novo_array);

//filtrar palavras longas

// let array = ["maçã", "banana", "abacaxi", "uva"];

// let palavraslongas = array.filter((palavras) => palavras.length >= 5);

// console.log(palavraslongas);



//multiplicar todos os elementos de uma array

// let array = [1,2,3,4];

//  let novo_array = array.reduce((ant,pro) => ant*pro);

//  console.log(novo_array);



// // contar ocorrencias de um valor

// function contadorDeOcorrencias(array,valor){

//     // let contador = 0;
//     // for (let numero of array) {
//     //     if (numero === valor) {
//     //         contador+=1;
//     //     }
//     // }
//     // return contador;
//     let contador = 0;
//     let teste = array.filter((numero) => valor===numero?contador++:undefined);
//     return contador;
// }

// console.log(contadorDeOcorrencias([3,1,2,2,3,2],3));

// MAP E FILTER MAP E FILTER MAP E FILTER MAP E FILTER MAP E FILTER

// 10. map e filter - Filtrar Palavras com 5 Caracteres e Transformar em Maiúsculas

// Dado um array de palavras, crie uma função que filtre as palavras que têm exatamente 5 caracteres 
// e, em seguida, use map para transformar essas palavras em letras maiúsculas.

// Entrada: ["maçã", "uva", "banana", "abacaxi", "laranja", "ameixa", "pêra"]

// Saída esperada: ["BANANA", "AMEIXA"]

// function maiorq5 (array) {

//     let filtro = array.filter((palavra) => palavra.length === 6).map((palavra) => palavra.toUpperCase()); 
//     console.log( filtro);

// }

// maiorq5(["maçã", "uva", "banana", "abacaxi", "laranja", "ameixa", "pêra"]);





// 11. Somar Valores Pares

// Dado um array de números, crie uma função que filtre apenas os números pares e, em seguida, use reduce para somar esses valores.

// Entrada: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Saída esperada: 30 // (2 + 4 + 6 + 8 + 10 = 30)



// function somapares(array){

//     let filtro = array.filter((numero) => numero%2===0).reduce((a,b) => a+b);
//     console.log(filtro);
// }

// somapares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);




// 12. Filtrar Nomes que Começam com uma Letra Específica e Contar Caracteres

// Dado um array de nomes, use filter para obter apenas os nomes que começam com a letra "A", 
// depois use map para transformar esses nomes em suas respectivas quantidades de caracteres, 
// e finalmente use reduce para somar todas as quantidades de caracteres.

// Entrada: ["Ana", "João", "Amanda", "Carlos", "Alberto"]

// Saída esperada: 14 // (Ana (3) + Amanda (6) + Alberto (7) = 14)

// let filtrarnomes = (array) => 
//                     array.filter((nome) => 
//                     nome.toLowerCase()[0] == "a").map((letras) => 
//                     letras.length).reduce((a,b) => a+b);

// console.log(filtrarnomes(["Ana", "João", "Amanda", "Carlos", "Alberto"]));



// 13. Filtrar Produtos em Estoque

// Dado um array de objetos que representam produtos 
// (cada produto tem um nome, valor e quantidadeEmEstoque), 
// crie uma função que filtre apenas os produtos que têm quantidade em estoque maior que 0.

// Entrada:

const produtos = [

{ nome: "Notebook", valor: 2500, quantidadeEmEstoque: 10 },

{ nome: "Celular", valor: 1500, quantidadeEmEstoque: 0 },

{ nome: "Monitor", valor: 800, quantidadeEmEstoque: 5 },

{ nome: "Teclado", valor: 100, quantidadeEmEstoque: 0 },

{ nome: "Mouse", valor: 50, quantidadeEmEstoque: 20 }

];

// Saída esperada:

// [

// { nome: "Notebook", valor: 2500, quantidadeEmEstoque: 10 },

// { nome: "Monitor", valor: 800, quantidadeEmEstoque: 5 },

// { nome: "Mouse", valor: 50, quantidadeEmEstoque: 20 }

// ]

// 14. Com esse mesmo array some o valor total do produtos em estoque.


// let contarproduto = (array_de_objetos) => array_de_objetos.filter((objeto) => 
//     objeto["quantidadeEmEstoque"] > 0).reduce((acc,obj) => acc += obj["quantidadeEmEstoque"], 0);

// console.log(contarproduto([
// { nome: "Notebook", valor: 2500, quantidadeEmEstoque: 10 },
// { nome: "Celular", valor: 1500, quantidadeEmEstoque: 0 },
// { nome: "Monitor", valor: 800, quantidadeEmEstoque: 5 },
// { nome: "Teclado", valor: 100, quantidadeEmEstoque: 0 },
// { nome: "Mouse", valor: 50, quantidadeEmEstoque: 20 }
// ]));
