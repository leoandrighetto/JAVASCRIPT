// map: Adicione o prefixo "Item: " a cada string de um array.
// Exemplo: ["maçã", "banana"] → ["Item: maçã", "Item: banana"]

let array = ["maçã", "banana"];

let nova_array = array.map((item) => "Item: "+ item )

console.log(nova_array);
