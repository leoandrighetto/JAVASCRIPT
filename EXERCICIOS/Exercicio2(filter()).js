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
