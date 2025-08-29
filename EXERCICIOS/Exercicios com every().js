// every: Verifique se todos os números de um array são pares.
// Exemplo: [2, 4, 6] → true

let array = [2,4,6,8];

let numeros_pares = array.every((numero) =>
  {return  numero % 2 === 0}


);
console.log(numeros_pares);

// every: Verifique se todas as strings de um array têm pelo menos 1 caractere.
// Exemplo: ["a", "bc", ""] → false

let array = ["a", "bc", ""];

let verifica_caractere = array.every((palavras) =>
  {return palavras.length > 0 });

console.log(verifica_caractere);

// every: Verifique se todos os objetos de um array possuem a propriedade id.
// Exemplo: [{id: 1}, {id: 2}] → true

let array = [{id: 1}, {id: 2}];

let verifica_id = array.every((obj) =>
  {return obj["id"]});

console.log(verifica_id);


// every: Verifique se todos os números de um array são positivos.
// Exemplo: [5, -3, 10] → false

let array = [5, 3, 10];

let positivo = array.every((num) =>
  {return num > 0});

console.log(positivo);

// find: Encontre o primeiro número maior que 10 em um array.
// Exemplo: [5, 8, 12, 3] → 12

let array = [5, 8, 1, 13];

let primeiro_10 = array.find((numero) => {return numero > 10})

console.log(primeiro_10);


// find: Encontre a primeira string que começa com a letra "a" (case insensitive).
// Exemplo: ["Apple", "banana", "Orange"] → "banana"

let array1 = ["Apple", "banana", "Orange"];

let primeira_a = array.find((string) => {return string.toLowcase == "a"})

console.log(primeira_a);


// find: Encontre o primeiro objeto em um array com id igual a 2.
// Exemplo: [{id: 1}, {id: 2}] → {id: 2}


// find: Encontre o primeiro número que é par e positivo.
// Exemplo: [-4, 3, 8, -2] → 8
