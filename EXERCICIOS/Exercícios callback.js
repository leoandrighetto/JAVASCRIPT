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

function calculadora(a,b, callback) {
  
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

/*Subtração com callback

Crie uma função subtrair(a, b, callback)
 que passa a subtração dos números 
 para o callback.
Crie um callback que imprime o resultado.*/







/*2. Divisão com callback

Crie uma função dividir(a, b, callback).

Passa o resultado da divisão para o callback.

O callback deve verificar se o divisor é 0 e, se for, imprimir "Erro: divisão por zero"; caso contrário, imprime o resultado.*/







/*3. Maior número com callback

Crie uma função maior(a, b, callback).

O callback deve receber os dois números e 
imprimir qual deles é maior.*/







/*4. Média de três números

Crie uma função media(a, b, c, callback).

Calcule a média dentro da função e passe 
para o callback.

O callback imprime "A média é: X".*/





/*

5. Calculadora flexível com operação passada
Crie uma função calculadora(a, b, callback)

Crie três callbacks: soma, subtração e 
multiplicação.
Teste chamando calculadora com cada callback.
*/




/*
6. Verificação de par ou ímpar

Crie uma função parOuImpar(num, callback).

A função verifica se num é par ou ímpar e passa uma mensagem para o callback.

O callback imprime "O número X é par" ou "O número X é ímpar".
*/




/*
7. Tabela de multiplicação com callback

Crie uma função tabuada(num, callback).

A função chama o callback para cada multiplicação de 1 a 10 (num * i).

O callback imprime cada linha da tabuada.
*/


















