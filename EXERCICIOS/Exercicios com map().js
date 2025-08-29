//map: Crie um array com a propriedade preço de um array de objetos de produtos.

let array = [{nome: "apple", preco: 2}, {nome: "banana", preco: 3}];

let nova_array = array.map((elemento) => elemento["preco"])

console.log(nova_array)

// map: Dobre os números pares e triplique os números ímpares de um array.
// Exemplo: [1, 2, 3] → [3, 4, 9]

let array = [1,2,3,4,5,6];

let nova_array = array.map((i) => (i % 2 === 0 ? i * 2 : i * 3));

console.log(nova_array);

// map: Adicione o prefixo "Item: " a cada string de um array.
// Exemplo: ["maçã", "banana"] → ["Item: maçã", "Item: banana"]

let array = ["maçã", "banana"];

let nova_array = array.map((item) => "Item: "+ item )

console.log(nova_array);

// map: Calcule o preço total (preço × quantidade) de um array de objetos com preço e quantidade.
// Exemplo:
// Entrada: [{preco: 5, quantidade: 2}, {preco: 10, quantidade: 3}]
// Saída: [10, 30]


let array = [{preco: 5, quantidade: 2}, {preco: 10, quantidade: 3}];

let nova_array = array.map((item) => item["preco"] * item["quantidade"] );

console.log(nova_array);

// map: Converta um array de datas no formato "YYYY-MM-DD" para "DD/MM/YYYY".
// Exemplo: ["2023-10-05", "2024-01-01"] → ["05/10/2023", "01/01/2024"]

let l = ["2023-10-05", "2024-01-01"];

let n_l = l.map (function(data) {
  
  let data1 = data.split('-');
  
  // return data1
  
  let data_com_barras = data1[2] + '/' + data1[1] + '/' + data1[0];
  
  return data_com_barras;
  
  
});

console.log(n_l);

// map: Converta valores booleanos para 1 (true) ou 0 (false).
// Exemplo: [true, false, true] → [1, 0, 1]


let lista_booleana = [true, false, true];

let array = lista_booleana.map(function(booleano){
  if (booleano === true)
  
  {booleano = "1";
    
  } else {
    
    booleano = "0";
    
  
  }
  return booleano;
  
});
  
console.log(array);

// map: Crie um array de strings HTML com tags <li> para cada elemento de um array.
// Exemplo: ["Pão", "Leite"] → ["<li>Pão</li>", "<li>Leite</li>"]





// let array =  ["Pão", "Leite"] ;

// let novo_array = array.map((texto) => "<li>" + texto + "</li>");

// console.log(novo_array);





let array =  ["Pão", "Leite"] ;

let novo_array = array.map((texto)  =>

{return "<li>" + texto + "</li>"}

);

console.log(novo_array);

/*
map: Some os elementos de arrays internos e retorne um array com os resultados.
Exemplo:
Entrada: [[1, 2], [3, 4, 5], [10]] → [3, 12, 10]
*/

let array = [[1, 2], [3, 4, 5], [10]];

let novo_array = array.map((inteiros) => {
  
let soma = 0;

for (let valor of inteiros) {
  
  soma+=valor ;
  
  };
  
return soma});


console.log(novo_array);

//map() TRANSFORME TODAS AS STRINGS DA LISTA EM PALAVRAS COM LETRAS MAIUSCULAS

let array = ['leo','é','um','cara','legal'];

let array_novo = array.map((palavras) => palavras.toUpperCase());

console.log(array_novo);


//MULTIPLIQUE OS ELEMENTOS DE UM ARRAY POR 2

let array = [2,4,6];

let array_novo = array.map((numero) => numero ** 2);

console.log(array_novo);

//EXERCICIO 7

let array = [{nome: 'Leonardo'}, {nome:'Andrighetto'}, {nome:'Linhares'}];

let novo_array = array.map((valores) => valores['nome']);

console.log(novo_array);


//EXERCICIO 8

// // SEM OPERADORES TERNÁRIOS

// let array = [1,2,3,4];

// let novo_array = array.map((i) => {if (i %2 === 0) {
  
//   return i*2;
  
// }
//   return i;// RETORNA O NÚMERO i, CASO A VALIDAÇÃO SERJA FALSA.
  
// });

// console.log(novo_array)



//com operador ternário


let array = [1,2,3,4,5];

let novo_array = array.map((i) => i % 2 === 0 ? i *2 : i);
//                        -           se    então    senão

// ...validação? ENTÃO VALIDAÇÃO: SENÃO VALIDAÇÃO
 
console.log(novo_array)

// map: Converta cada número de um array para uma string com o sufixo "kg".
// Exemplo: [2, 5] → ["2kg", "5kg"]

let array = [11,22];

let nova_array = array.map((numero) => (numero + "kg"))

console.log(nova_array)
