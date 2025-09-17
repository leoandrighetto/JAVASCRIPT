// 1 - conversões de tipo:

// let str = "123";
// let str_convertida = Number(str);

// console.log(str_convertida);


// 2 - Operador ternário:

// let idade = 17;
// let conferir_maior_idade = idade >= 18? 'maior de idade' : 'menor de idade';

// console.log(conferir_maior_idade);


// 3 - Switches

// let teste = 2; //se o teste for igual a um, é true ('deu certo);

// switch (teste) {
//     case 1:
//         console.log('Deu certo');
//         break;

//     case 2:
//         console.log('por pouco');
//         break;

//     default:            //equivalente ao else
//     console.log('não deu');
//         break;
// }


// 4 - Operadores lógicos:

// && (AND) → retorna true se ambas as condições forem verdadeiras.

// || (OR) → retorna true se pelo menos uma das condições for verdadeira.

// !(NOT) → inverte o valor lógico(transforma true em false e false em true).

// ?? (Nullish Coalescing) → retorna o valor da direita somente se o da 
// esquerda for null ou undefined.

// ?: (Operador ternário) → não é lógico puro, mas é usado para
//  verificar condições de forma curta(condição ? valorSeVerdadeiro : valorSeFalso).


// 5 - For of:

// let array = [1,2,3];
// let string = "abcd";

// for (const element of array) {
//     console.log(element);
// }   

// for (const element of string) {
//     console.log(element);
// }



// 6 - For in: Percorre as CHAVES (keys) de um objeto

// let objeto = { nome: "Leonardo", idade: 27};


// for (const key in objeto) { 
//     console.log(key);
// }

// console.log();

// //para percorrer os VALUES (valores), é necessário utilizar o método Object.values
// for (const valores in Object.values(objeto)) {
//     console.log(valores);
// }



// // 7 - Callback

// //vamos imaginar um contexto que eu precise de um callback, e exercitar na minha cabeça o seu conceito, 
// //antes:

// //  O callback é uma função utilizada como o parâmetro de uma outra função.
// //  Por exemplo, eu quero utilizar uma callbak no mesmo exercício do item 2 (operadores ternários):

// let descobrir_idade = (idade,callback) => imprimir(idade);

// let imprimir = (idade) => {if (idade>=18){console.log('maior de idade');}
//                            else {console.log('menor de idade');}}

// descobrir_idade(18, imprimir);

// //  Ou seja, dentro da função "descobrir_idade" eu tenho 2 parâmetros: idade e imprimir.

// //  em IDADE eu declaro a idade que quero conferir.

// //  IMPRIMIR é uma função, que imprime o resultado do teste de maior idade.



