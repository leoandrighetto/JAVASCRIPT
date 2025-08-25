/*
reduce: Calcule a soma de todos os números de um array.
Exemplo: [1, 2, 3] → 6
*/

let array = [1,2,3,89];

let novo_array = array.reduce((acumulador, numero) =>
acumulador + numero, 0);

console.log(novo_array);
