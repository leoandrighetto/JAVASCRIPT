// map: Calcule o preço total (preço × quantidade) de um array de objetos com preço e quantidade.
// Exemplo:
// Entrada: [{preco: 5, quantidade: 2}, {preco: 10, quantidade: 3}]
// Saída: [10, 30]


let array = [{preco: 5, quantidade: 2}, {preco: 10, quantidade: 3}];

let nova_array = array.map((item) => item["preco"] * item["quantidade"] );

console.log(nova_array);
