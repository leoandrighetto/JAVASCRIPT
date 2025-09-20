import { input, select, Separator } from '@inquirer/prompts';
import CrudAPI from './CrudAPI.js';


async function criarNovaConsulta() {

    let nome;
    let idade;

    while (!nome) { nome = await input({ message: "Nome: " }) }

    while ((!idade) && (isNaN(idade))) { idade = await input({ message: "Idade: " }) }

    let id_especialidade = '';

    let opcao = " ";
    while (opcao != "") {
        const opcao = await select({
            message: 'Selecione uma opção:',
            choices: [
                { name: "Clínica Médica", value: "100" },
                { name: "Pediatria", value: "101" },
                { name: "Traumatologia", value: "102" },
                { name: "Cardiologia", value: "103" },
                { name: "Dermatologia", value: "104" },
                { name: "Geriatria", value: "105" }]
        })

        switch (opcao) {
            case "100":
                id_especialidade = "100";
                break;

            case "101":
                id_especialidade = "101";
                break;

            case "102":
                id_especialidade = "102";
                break;

            case "103":
                id_especialidade = "103";
                break;

            case "104":
                id_especialidade = "104";
                break;

            case "105":
                id_especialidade = "105";
                break;

            default:
                break;

        }

        const novo = await CrudAPI.criar(
            { paciente: nome, idade: idade, id_especialidade: id_especialidade });

        console.log("Cadastro realizado com sucesso, nova ID: " + novo.id);
        break

    }
}

async function listarTodasConsultas() {

    const todos_registros = await CrudAPI.lerTodos();

    todos_registros.forEach((paciente) => {
        console.log(paciente.id + " - " + paciente.paciente + " - " +
            " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade)
    })

}

async function BuscarporID() {

    let id_informado;

    while (!id_informado) {
        id_informado = await input({ message: "Informe o ID: " })
    }

    const paciente = await CrudAPI.lerPorId(Number(id_informado))
    if (paciente) {
        console.log(paciente.id + " - " + paciente.paciente + " - " +
            " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade);
    }

    else { console.log("ID não encontrado \n"); }
}

async function BuscarporNome() {

    let nome_informado;

    while (!nome_informado) {
        nome_informado = await input({ message: "Nome do paciente: " })
    }

    const todos_registros = await CrudAPI.lerTodos();

    todos_registros.filter((paciente) => paciente.paciente.startsWith(nome_informado)).forEach((paciente) => {
        console.log(paciente.id + " - " + paciente.paciente + " - " +
            " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade)
    })

}

async function BuscarporEspecialidade() {

    const todos_registros = await CrudAPI.lerTodos();

    let id_especialidade;

    let opcao = " ";
    while (opcao != "") {
        const opcao = await select({
            message: 'Selecione uma opção:',
            choices: [
                { name: "Clínica Médica", value: 100 },
                { name: "Pediatria", value: 101 },
                { name: "Traumatologia", value: 102 },
                { name: "Cardiologia", value: 103 },
                { name: "Dermatologia", value: 104 },
                { name: "Geriatria", value: 105 }]
        })

        switch (opcao) {
            case 100:
                id_especialidade = 100;

                todos_registros.filter((paciente) => paciente.id_especialidade === id_especialidade).forEach(paciente => console.log(paciente.id + " - " + paciente.paciente + " - " +
                    " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade));
                break;

            case 101:
                id_especialidade = 101;
                todos_registros.filter((paciente) => paciente.id_especialidade === id_especialidade).forEach(paciente => console.log(paciente.id + " - " + paciente.paciente + " - " +
                    " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade));

                break;

            case 102:
                id_especialidade = 102;
                todos_registros.filter((paciente) => paciente.id_especialidade === id_especialidade).forEach(paciente => console.log(paciente.id + " - " + paciente.paciente + " - " +
                    " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade));
                break;

            case 103:
                id_especialidade = 103;
                todos_registros.filter((paciente) => paciente.id_especialidade === id_especialidade).forEach(paciente => console.log(paciente.id + " - " + paciente.paciente + " - " +
                    " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade));
                break;

            case 104:
                id_especialidade = 104;
                todos_registros.filter((paciente) => paciente.id_especialidade === id_especialidade).forEach(paciente => console.log(paciente.id + " - " + paciente.paciente + " - " +
                    " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade));
                break;

            case 105:
                id_especialidade = 105;
                todos_registros.filter((paciente) => paciente.id_especialidade === id_especialidade).forEach(paciente => console.log(paciente.id + " - " + paciente.paciente + " - " +
                    " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade));
                break;

            default:
                break;


        }
        break

    }
}

async function menoresDeIdade() {

    const todos_registros = await CrudAPI.lerTodos();

    todos_registros.forEach((paciente) => {
        if (paciente.idade <= 17) {
            console.log(paciente.paciente + " (" +
                + paciente.idade + ")")
        }
    })



}

async function listarConsultasEspecialidade() {

    const todos_registros = await CrudAPI.lerTodos();

    const especialidades = await CrudAPI.listaEspecialidades();
    especialidades.forEach(element => {
    });

    // const todos_registros = await CrudAPI.lerTodos();

    let especialidade = especialidades.filter((esp) => esp.nome);
    console.log(especialidade);
    console.log();

    especialidade.forEach(esp => {
        todos_registros.forEach(paciente => {
            if (Number(esp["id"]) == Number(paciente.id_especialidade)) {
                console.log(paciente.id + " - " + paciente.paciente + " - " +
                    " Idade: " + paciente.idade + " - " + " Nome Especialidade: " + esp["nome"])
            }
        })
    });
}

async function registroComProblemas() {

    const todos_registros = await CrudAPI.lerTodos();

    todos_registros.filter((paciente) => (paciente.id_especialidade === Number(101)) || (paciente.id_especialidade === Number(105))).forEach((paciente) => {

        if (((paciente.id_especialidade === Number(101)) && paciente.idade > 18) ||
            (paciente.id_especialidade === Number(105)) && paciente.idade < 60) {
            console.log(paciente.id + " - " + paciente.paciente + " - " +
                " Idade: " + paciente.idade + " - " + " ID Especialidade: " + paciente.id_especialidade)
        }
    })
}


let opcoes = "";

while (opcoes != "Sair") {
    const opcoes = await select({
        message: 'Selecione uma opção:',
        choices: [
            { name: "Criar nova Consulta", value: "Criar nova Consulta" },
            { name: "Listar todas as Consultas", value: "Listar todas as Consultas" },
            { name: "Buscar consulta por ID", value: "Buscar consulta por ID" },
            { name: "Buscar consulta por Nome do Paciente", value: "Buscar consulta por Nome do Paciente" },
            { name: "Buscar consulta por Especialidade", value: "Buscar consulta por Especialidade" },
            { name: "Listar todas as consultas (com nome da especialidade)", value: "Listar todas as consultas (com nome da especialidade)" },
            { name: "Menores de idade", value: "Menores de idade" },
            { name: "Registros com Problemas (Pediatria/Geriatria)", value: "Registros com Problemas (Pediatria/Geriatria)" },
            { name: "Sair", value: "Sair" },
            new Separator()]
    });



    switch (opcoes) {
        case "Criar nova Consulta":
            await criarNovaConsulta();
            break;

        case "Listar todas as Consultas":
            await listarTodasConsultas();
            break;

        case "Buscar consulta por ID":
            await BuscarporID();
            break;

        case "Buscar consulta por Nome do Paciente":
            await BuscarporNome();
            break;

        case "Buscar consulta por Especialidade":
            await BuscarporEspecialidade();
            break;

        case "Listar todas as consultas (com nome da especialidade)":
            await listarConsultasEspecialidade();
            break;

        case "Menores de idade":
            await menoresDeIdade();
            break;

        case "Registros com Problemas (Pediatria/Geriatria)":

            await registroComProblemas();
            break

        case "Sair":

            process.exit();

        default:
            break;
    }
}
