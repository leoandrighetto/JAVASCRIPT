// Encadeamento: Filtre números positivos, mapeie para seus quadrados e some-os.
// Exemplo: [-2, 3, 4] → 3² + 4² = 25

// let array = [-2, 3, 4];

// let encadeamento = array.filter((numero) => numero > 0).map((numero) => 
// numero **2).reduce((a,b) => a+b);

// console.log(encadeamento);

// Encadeamento: Filtre números pares e encontre o primeiro maior que 10.
// Exemplo: [8, 12, 15, 16] → 12

// let array = [8, 12, 15, 16];

// let encadeamento = array.filter((numero) => numero %2 ===0).find((numero) => numero > 10);

// console.log(encadeamento);


// Encadeamento: Mapeie strings para seus tamanhos, filtre os maiores que 3 e verifique se todos são pares.
// Exemplo: ["a", "abcd", "xyz"] → [4, 3] → false

// let array = ["a", "abcd", "xyz"];

// let encadeamento = array.map((string) => string.length).filter((numero) => numero >= 3).every((numero) => 
// numero % 2 === 0);

// console.log(encadeamento);

// Encadeamento: Filtre objetos com ativo: true, mapeie para nome e junte-os com vírgulas.
// Exemplo: [{nome: "A", ativo: true}, {nome: "B", ativo: false}] → "A"

// let array = [{nome: "A", ativo: true}, {nome: "B", ativo: false}, {nome: "C", ativo: true}];

// let encadeamento = array.filter((obj) => obj["ativo"] === true).map((obj) =>
// {return obj["nome"]}).reduce((an,at) => an + "," + at);

// console.log(encadeamento);


// Encadeamento: Encontre um produto com preço maior que 100 e verifique se está em estoque (estoque: true).
// Exemplo: [{estoque: 90, preco: true}, {preco: 150, estoque: false}] → undefined

// let array = [{estoque: 90, preco: true}, {preco: 150, estoque: false}];

// let encadeamento = array.find((obj) => (obj["preco"] >= 100) && (obj["estoque"] === true));

// console.log(encadeamento);


// Encadeamento: Mapeie números para seus quadrados, filtre os maiores que 50 e some-os.

// Exemplo: [4, 6, 8] → 6² + 8² = 100

// let array = [4, 8, 8];

// let encadeamento = array.map((numero) => numero ** 2).filter((numero) => numero >= 50).reduce((ant,atu) => ant += atu);

// console.log(encadeamento);



// Encadeamento: Filtre strings que começam com "A", mapeie para maiúsculas e verifique se todas têm pelo menos 5 letras.
// Exemplo: ["apple", "Avocado", "Banana"] → ["APPLE", "AVOCADO"] → true

// let array = ["apple", "Avocado", "Banana"];

// let encadeamento = array.filter((str) => str.toLowerCase()[0] === "a").map((str) => str.toUpperCase()).every((str) => str.length >= 5 );

// console.log(encadeamento);


// Encadeamento: Some todos os números usando reduce e verifique se a soma é par.
// Exemplo: [1, 2, 3] → 6 → true


let array = [1, 2, 3];

let encadeamento = array.reduce((an,at) => (an + at) & );

console.log(encadeamento);


// Encadeamento: Filtre números menores que 50, mapeie para suas raízes quadradas e calcule o produto.
// Exemplo: [16, 49, 64] → [4, 7, 8] → 4 * 7 * 8 = 224

