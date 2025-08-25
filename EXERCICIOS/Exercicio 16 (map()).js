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
