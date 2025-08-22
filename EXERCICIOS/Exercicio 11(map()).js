// map: Dobre os números pares e triplique os números ímpares de um array.
// Exemplo: [1, 2, 3] → [3, 4, 9]

let array = [1,2,3,4,5,6];

let nova_array = array.map((i) => (i % 2 === 0 ? i * 2 : i * 3));

console.log(nova_array);
