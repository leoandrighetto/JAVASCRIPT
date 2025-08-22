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
