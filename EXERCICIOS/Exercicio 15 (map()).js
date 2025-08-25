// map: Converta valores booleanos para 1 (true) ou 0 (false).
// Exemplo: [true, false, true] → [1, 0, 1]


let lista_booleana = [true, false, true];

let array = lista_booleana.map(function(booleano){
  if (booleano === true)
  
  {booleano = "1";
    
  } else {
    
    booleano = "0";
    
  
  }
  return booleano;
  
});
  
console.log(array);
