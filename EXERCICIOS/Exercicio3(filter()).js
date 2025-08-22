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
