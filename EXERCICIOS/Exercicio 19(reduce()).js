// reduce: Calcule o produto de todos os números de um array.
// Exemplo: [2, 3, 4] → 24

let array = [2, 3, 4];

let novo_array = array.reduce((acumulador, valor) => acumulador * valor, 1
);

console.log(novo_array);
