    //chamadas assincronas
    
    //https://www.npmjs.com/package/readline-sync
    
    //escopo estático




//    ENTRADA DE USUÁRIO     ENTRADA DE USUÁRIO     ENTRADA DE USUÁRIO     ENTRADA DE USUÁRIO 



    // instalação de biblioteca "npm install readline-sync" para obter entrada do usuário de forma síncrona através do termina

    // digitar no terminal: npm install readline-sync

    // carregar import no código: import leitor from 'readline-sync'
                                  // leitor, é opcional, pode ser qualquer nome









        //!!!!!ENVIAR APENAS O ARQUIVO index.js e package.json NO DIA DA PROVA!!!!!!!!!

        //!!!!!compacta-los.compacta-los.compacta-los.compacta-los.compacta-los.compacta-los.compacta-los.

        //para instalar dependencias de um arquivo cujos módulos não sejam instalados, 

                  //digitar no terminal: npm install

                  //digitar no código:  import leitor from 'readline-sync';


import leitor from 'readline-sync';

// let nome = leitor.question('Qual seu nome?');

// console.log("Olá," + nome);


//  ||   ==  OR
//  &&   ==  AND

/// ===  == COMPARA TANTO O TIPO QUANTO O VALOR DE UM OBJETO
    //exemplo: 
    //let a ='1.8';
    //let b = 1.8;

    //console.log(a===b);      = True

    //console.log(typeof(b)) mostra o tipo

    // b = parseInt(b)      transforma o valor em número (sempre para um inteiro atruncado)

    //b = parseFloat(b)     transforma o valor em número (arredondando)

    //NaN    =  NOT A NUMBER



    
// let a = leitor.question("Valor a: ");
// let b = leitor.question("Valor b: ");

        // let total = a+b;

        //console.log("Total de a+b: " + total); //DA FALSE: PORQUE O .question "CONCATENA" em String

        //outro exemplo:

        // a = casa
        // b = casa
        // total de a+b: NaN




// let numeroInvalido = true;

// let a; //cria a variavel e mantém ela no escopo global

// while (numeroInvalido) {

//     a = leitor.question("Valor a: "); // não é necessário declarar a variavel novamente

//     if ( a!=""&&!isNaN(a)) {

//         numeroInvalido = false;
//     } else {
//         console.error ("Valor Inválido")
//     }

// }

// let b = leitor.question("Valor b: ");

// let total = Number(a) + Number(b);
// console.log(total)


function lerNumero(Parametro){

    let numeroInvalido = true;

    let a; //cria a variavel e mantém ela no escopo global

    while (numeroInvalido) {

    a = leitor.question(Parametro); // não é necessário declarar a variavel novamente

    if ( a!=""&&!isNaN(a)) {

        numeroInvalido = false;
    } else {
        console.error ("Valor Inválido")
    }

    }
    return Number(a);

}

let valorA = lerNumero("Valor a: ");
let valorB = lerNumero("Valor b: ");


let total = valorA + valorB;
console.log(total)


// TEMA

// faça uma função que peça para o usuario digitar um valor A, que será o número números a ser somado, e depois some os númneros digitados A vezes pelo usuário

// some os valores digitados pelo usuario




