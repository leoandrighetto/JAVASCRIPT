import { input, select, Separator } from '@inquirer/prompts';

import CrudAPI from './CrudAPI.js';

async function criarNovoRegistro() {

    let nome;
    let email;

    while (!nome) {
        nome = await input({ message: "Digite seu nome" });
    }

    while (!email) {
        email = await input({ message: "Digite seu e-mail" });
    }

    let novoRegistro = await CrudAPI.criar({ nome: nome, email: email });
    linha();
    console.log(`Cadastro realizado com sucesso!\n`);
    return novoRegistro;

}

//listar todos os registros

async function listarTodosRegistros() {

    const todos_registros = await CrudAPI.lerTodos();
    // console.log(todos_registros); não dá certo, porque o método retorna 
    // um array de objetos.

    todos_registros.forEach((pessoa) => {
        console.log(`ID: ${pessoa.id} - 
                    Nome: ${pessoa.nome} - 
                    E-mail: ${pessoa.email}`);

    });
    linha();

}

// Buscar Registro por ID:

async function BuscarporID() {

    let id_informado;

    while (!id_informado) {
        id_informado = await input({ message: "Informe o ID: " })
    }

    const verificar_id = await CrudAPI.lerPorId(Number(id_informado))
    if (verificar_id) {
        console.log("\n ID encontrado: \n");
        console.log(verificar_id);
        linha();
    }

    else { console.log("ID não encontrado \n"); }
}


// Atualizar registros:

async function atualizarRegistro() {

    let id_informado;
    let verificar_id;
    
    while (!id_informado || !verificar_id) {
        id_informado = await input({ message: "Informe o ID: " })
    
        let verificar_id = await CrudAPI.lerPorId(Number(id_informado))

        if (verificar_id) {
            id_informado = Number(id_informado);
            console.log("\n ID encontrado!\n");
            console.log();
            break;

        }else {console.log('ID não encontrado')}

    }

    let nome;
    let email;

    while(!nome){
        nome = await input ({message: "Informe o nome atualizado: "})
    }
    
    while(!email){
        email = await input ({message: "Informe o email atualizado: "})
    }
    
    let atualizacao = await CrudAPI.atualizar(id_informado,{nome: nome,email:email});
    linha();
    console.log("Dados Atualizados!")
    console.log(atualizacao);
    linha();
}

// Excluir registro:

async function excluirRegistro() {

    let id;

    let flag = false;


    while(!flag){
        try {
            while(!id){
            id = await input({message: 'Informe o ID a ser excluido: '})}

            let capturando_erro = await CrudAPI.excluir(Number(id));

            
            if (capturando_erro){
                linha();
                console.log('Registro Excluido.')
                console.log(capturando_erro);
                linha();
                flag = true;
            }

        } catch (capturando_erro) {
            linha();
            console.log(capturando_erro.message);
            linha();
            id = ""; // para garantir que o id seja reiniciado
        }
    }
}

// Tudo em maiuscula

async function tudoemMaiuscula() {

    let ler_todos = await CrudAPI.lerTodos();
    linha();
    ler_todos.forEach((pessoa)=> console.log(pessoa.id + " - " + 
                                             pessoa.nome.toUpperCase() + " - " + 
                                             pessoa.email));
    linha();

}

// sobrenome primiero

async function quebraNome(nome){
    let nome_quebrado = await nome.split(" ");
    if (nome_quebrado.length <= 1) {
        return nome;
    }

    let nome_formatado = await nome_quebrado[nome_quebrado.length-1] + ", " + nome_quebrado[0]; 
    return nome_formatado;
}

async function sobrenomePrimeiro() {

    const todos_registros = await CrudAPI.lerTodos();

    // console.log(todos_registros); não dá certo, porque o método retorna 
    // um array de objetos.
    
    let nomes_promessas = todos_registros.map((pessoa) => quebraNome(pessoa.nome));

    let nomes_quebrados = await Promise.all(nomes_promessas);
    linha();
    let i = 0;
    todos_registros.forEach(pessoa => console.log(pessoa.id + " - " + nomes_quebrados[i++] + " - " + pessoa.email));
    linha();

}

// Pesquisa por nome

async function pesquisaPorNome() {

    let todos_registros = await CrudAPI.lerTodos();

    let input_usuario = await input ({message: "Digite o nome da pessoa: "});   
    todos_registros.forEach(pessoa => {if (pessoa.nome.includes(input_usuario)){console.log(pessoa.id + " - " + pessoa.nome + " - " + pessoa.email);}});

}

// para cada função assíncrona, cria-se um case dentro de um switch:

let opcoes = "";

while (opcoes != "Sair") {
    const opcoes = await select({
        message: 'Selecione uma opção:',
        choices: [
            { name: "Criar novo registro", value: "Criar novo registro" },
            { name: "Listar todos os registros", value: "Listar todos os registros" },
            { name: "Buscar registro por ID", value: "Buscar registro por ID" },
            { name: "Atualizar registro", value: "Atualizar registro" },
            { name: "Excluir registro", value: "Excluir registro" },
            { name: "Tudo em maiúscula", value: "Tudo em maiúscula" },
            { name: "Sobrenomes primeiro", value: "Sobrenomes primeiro" },
            { name: "Pesquisa por nome", value: "Pesquisa por nome" },
            { name: "Sair", value: "Sair" },
            new Separator()]});

    switch (opcoes) {
        case "Criar novo registro":
            await criarNovoRegistro();
            break;

        case "Listar todos os registros":
            await listarTodosRegistros();
            break;

        case "Buscar registro por ID":
            await BuscarporID();
            break;

        case "Atualizar registro":
            await atualizarRegistro();
            break;
        
        case "Excluir registro":
            await excluirRegistro();
            break;
        
        case "Tudo em maiúscula":
            await tudoemMaiuscula();
            break;

        case "Sobrenomes primeiro":
            await sobrenomePrimeiro();
            break;

        case "Pesquisa por nome":
            await pesquisaPorNome();

        default:
            break;
        }
}

console.log(opcoes);


