//exer 1

let lista2 = [1,2,3,4,5,6,6]

//UTILIZAÇÃO DE filter()


//    UTILIZANDO ARROW FUNCTION

let numeros_pares = lista2.filter((numero_da_vez) => numero_da_vez % 2 === 0);
//                                 VARIAVEL
//                                 que representa cada elemento do array.

console.log(numeros_pares);

// código cru


//let numeros_pares = lista2.filter(function(i) 
//      {return i % 2 === 0;
  
//      });

//console.log(numeros_pares);

//exerc 2

let lista = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let somente_primos = lista.filter(function(elemento_da_lista) {

  let contador = 0;
  
  for (let a = 1; a <= elemento_da_lista; a++) {
    
   if (elemento_da_lista % a === 0) {
     contador ++;
   } 
  }
    return contador === 2; // se o valor de contador for igual a 2, este numero irá para dentro da lista nova utilizando a função filter();

});

console.log(somente_primos);

//exer 3

//EXERCICIO SEM O ARROW FUNCTION

// let array = ['abc','abcd','sbcde','abc','12345','11'];

// let array_novo = array.filter(function(elemento) {
  

// return elemento.length > 3;
// });

// console.log(array_novo);

// CODIGO COM O ARROW FUNCTION

let array = ['123','1234','123','1234','123','1234'];

let novo_array = array.filter(caracter => caracter.length > 3);

console.log(novo_array);

//exerc 4 

let array = [{ativo: true}, {ativo: false}];

let array_novo = array.filter((dicionario) => dicionario["ativo"] === true);

console.log(array_novo);
