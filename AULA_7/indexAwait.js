import { input } from '@inquirer/prompts';

import CrudAPI from './CrudAPI.js';

const pessoas = await CrudAPI.lerTodos();
console.log(pessoas);


//É necessário transformar uma função que utiliza "await" em uma função assíncrona, pois o comando não funciona em chamadas síncronas.
//FUNÇÕES SÃO ASSÍNCRONAS AO MENOS QUE VOCÊ DIGA QUE ELA NÃO É.

async function lerDadosPessoa(){
    const nome = await input({ message: 'Digite seu nome: ' });
    const email = await input({ message: "Digite seu email: " });
    const pessoa = {nome:nome,email:email};
    return pessoa;
    }

// para chamar funções assíncronas, é necessário utilizar await

const pessoa = await lerDadosPessoa();
console.log(pessoa);