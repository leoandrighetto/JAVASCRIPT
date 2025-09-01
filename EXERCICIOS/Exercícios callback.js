/*DECLARANDO A FUNCAO

function saudacao(callback) {
  console.log("Olá!"); 
  callback();/* chama a funcao que esta 
  como argumento
}

/*CHAMANDO A FUNCAO

saudacao(function() {
  console.log("Seja bem vindo!");
});*/


// EXERCICIO 1
/*function soma(a,b, callback){
  p = a+b;
  callback(p);
};

function resultado(res) {
  console.log(res); 
  
};

soma(2,1,resultado);*/

// EXERCICIO 2

/*function calculadora(a,b, callback) {
  
  callback(a,b);
  
};

function somar(a,b){
  soma=a+b;
  console.log(soma);
};

function mult(a,b) {
  multip=a*b;
  console.log(multip);
};

calculadora(1,2,somar);

calculadora(4,3,mult);

//EXERCICIOS CHATGPT

// Subtração com callback
// Crie uma função subtrair(a, b, callback) que passa a subtração dos números para o callback.
// Crie um callback que imprime o resultado.

/*function subtrair(a,b,call) {
  
  sub = a - b;
  
  call(sub);
}

function resposta(c) {
  console.log(c);
  
}

subtrair(4,11,resposta);*/



// Divisão com callback
// Crie uma função dividir(a, b, callback).
// Passa o resultado da divisão para o callback.
// O callback deve verificar se o divisor é 0 e, se for, imprimir "Erro: divisão por zero"; caso contrário, imprime o resultado.

/*function dividir (a,b,call) {
  
  div = a/b;
  
  if (b!=0) {
    call(div)  
  }
  else {
    console.log("Erro: divisão por zero");
  }
}

function resposta(c){
  console.log(c);
}

dividir(4,4,resposta)*/



// Maior número com callback
// Crie uma função maior(a, b, callback).
// O callback deve receber os dois números e imprimir qual deles é maior.

/*function maior(a,b,call) {
  if(a>b){
    call(a);}
    else {call(b)
  }
}

function mostrar(c) {
  console.log(c);
}

maior(3,2,mostrar);*/



// Média de três números
// Crie uma função media(a, b, c, callback).
// Calcule a média dentro da função e passe para o callback.
// O callback imprime "A média é: X".

/*function calcular_media(a,b,c, call){
  
  media = (a+b+c) / 3;
  
  call(media);
  
}

function mostrar(media){
  console.log("A Média é: " +  media.toFixed(2));
}

calcular_media(44,13,34,mostrar);*/




// Calculadora flexível com operação passada
// Crie uma função calculadora(a, b, callback).
// Crie três callbacks: soma, subtração e multiplicação.
// Teste chamando calculadora com cada callback.


/*function calculadora (a,b,call) {

  return call(a,b);
  
}

function soma(a,b){
  
  c = a+b;
  console.log(c);
  
}

function subtração(a,b){
  c = a - b;
  console.log(c);
}

function multiplicação(a,b){
  c = a*b;console.log(c);
}

calculadora(4,4,multiplicação);*/



// Verificação de par ou ímpar
// Crie uma função parOuImpar(num, callback).
// A função verifica se num é par ou ímpar e passa uma mensagem para o callback.
// O callback imprime "O número X é par" ou "O número X é ímpar".

/*function parOuImpar(num,call) {
  call(num);
}

function verifica(n){
  
  if (n % 2 === 0) {
    console.log("O número " + n + " é par");
  }else {
    console.log("O número " + n + " é ímpar");
  }
}

parOuImpar(3,verifica);*/


// Tabela de multiplicação com callback
// Crie uma função tabuada(num, callback).
// A função chama o callback para cada multiplicação de 1 a 10 (num * i).
// O callback imprime cada linha da tabuada


/*function tabuada(num,call){

  for (let i = 1; i < 11; i++ ){
    mul = i * num;
    call(mul);
  }
}

function mostrar(resultado){
  console.log(resultado);
}

console.log("");
tabuada(2,mostrar);
*/
