// reduce: Encontre a string mais longa de um array.
// Exemplo: ["a", "abc", "ab"] → "abc"

let array = ['a','abc','ab'];

let maior_string = array.reduce(function(ant,atual)  {
  if (ant < atual){
    return atual;}
    
  if (atual <= ant) {
    return ant;
  }
  
});
  
console.log(maior_string);

/*
reduce: Calcule a soma de todos os números de um array.
Exemplo: [1, 2, 3] → 6
*/

let array = [1,2,3,89];

let novo_array = array.reduce((acumulador, numero) =>
acumulador + numero, 0);

console.log(novo_array);

// reduce: Calcule o produto de todos os números de um array.
// Exemplo: [2, 3, 4] → 24

let array = [2, 3, 4];

let novo_array = array.reduce((acumulador, valor) => acumulador * valor, 1
);

console.log(novo_array);
