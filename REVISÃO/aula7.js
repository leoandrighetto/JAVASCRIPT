import { input, select } from '@inquirer/prompts';

import CrudAPI from './CrudAPI.js';

async function listarTodos() {

    let ler_todos = await CrudAPI.lerTodos();

    ler_todos.forEach((pessoa)=> console.log(pessoa.id + " - " + pessoa.nome + " - " + pessoa.email));

}

///////// para salvar o arquivo da prova, salva TODOS os arquivos da pasata onde ta a prova menos a unica PASTA node_modules (PASTA)

async function quebraNome(nome){
    let nome_quebrado = nome.split(" ");
    if (nome_quebrado.length <= 1) {
        return nome;
    }

    let formatar = nome_quebrado[nome_quebrado.length-1] + ", " + nome_quebrado[0]; 
    console.log(formatar);
}

async function sobrenomePrimeiro() {

    let ler_todos = await CrudAPI.lerTodos();

    let sobrenomes = ler_todos.forEach((pessoa)=> console.log(quebraNome(pessoa.nome)));

    return sobrenomes;

}

async function cadastrarTodos() { //NÃO SOLICITAE ID
    let nome;
    let email;

    while(!nome){
        nome = await input ({message: "Digite seu nome: "});
    }

    while(!email){
        email = await input ({message: "Digite seu email: "});
    }

    let novoCadastro = await CrudAPI.criar({ nome: nome, email: email });
    return novoCadastro;

}

async function tudoemMaiuscula() {

    let ler_todos = await CrudAPI.lerTodos();


    ler_todos.forEach((pessoa)=> console.log(pessoa.id + " - " + pessoa.nome + " - " + pessoa.email));

}


let opcao = "";

while (opcao != 'Sair') {
    opcao = await select({
        message: 'Opção: ',
        choices: [
            { name: 'Cadastrar', value: 'Cadastrar' },
            { name: 'Listar', value: 'Listar' },
            { name: 'Sair', value: 'Sair' },
            { name: 'Sobrenome', value: 'Sobrenome' },
            { name: 'Tudo em maiúscula', value: 'Tudo em maiúscula' }
            
        ]
    });

    switch (opcao) {
        case "Listar":
            await listarTodos();
            break;
        
        case "Cadastrar":
        await cadastrarTodos();
        break;

        case "Sobrenome":
        await sobrenomePrimeiro();
        break;

        case "Tudo em maiúscula":
            await tudoemMaiuscula();
            break;
    
        default:
            break;
    }
}

console.log(opcao);