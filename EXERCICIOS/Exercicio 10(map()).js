//map: Crie um array com a propriedade preço de um array de objetos de produtos.

let array = [{nome: "apple", preco: 2}, {nome: "banana", preco: 3}];

let nova_array = array.map((elemento) => elemento["preco"])

console.log(nova_array)
