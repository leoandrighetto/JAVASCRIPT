// // SEM OPERADORES TERNÁRIOS

// let array = [1,2,3,4];

// let novo_array = array.map((i) => {if (i %2 === 0) {
  
//   return i*2;
  
// }
//   return i;// RETORNA O NÚMERO i, CASO A VALIDAÇÃO SERJA FALSA.
  
// });

// console.log(novo_array)



//com operador ternário


let array = [1,2,3,4,5];

let novo_array = array.map((i) => i % 2 === 0 ? i *2 : i);
//                        -           se    então    senão

// ...validação? ENTÃO VALIDAÇÃO: SENÃO VALIDAÇÃO
 
console.log(novo_array)
