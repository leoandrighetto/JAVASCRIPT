import { input } from '@inquirer/prompts';

// const answer = input({ message: 'Enter your name: ' });

//quando uma função é assincrona ela não retorna um valor, mas uma promessa

const nome = input({ message: 'Enter your name: ' });

function retornarResposta(nome){
    const idade = input({ message: 'Enter your age: ' });
    
    function retornaridade(idade){
    console.log("Nome: " + nome + "," + " Idade: "+ idade); 
    }
    idade.then(retornaridade);
}

nome.then(retornarResposta);