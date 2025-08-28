//ESTRUTURAS DE DADOS

//Array e Objetos.

//Array é lista de elementos.

let lista = ['1', 2, null, "", undefined];

console.log(lista.length);

let lista1 = [2, 3];

let lista2 = [5, 6];

//CONCATENAR

let lista3 = lista1.concat(lista2);

console.log(lista3);

//ESPALHAMENTO

let lista4 = [...lista1];

console.log(lista4);


// CLASSES

class Pessoa {
    constructor(atributo, atributo1, atributo2) {
        this.atributo = atributo;
        this.atributo1 = atributo1;
        this.atributo2 = atributo2;

    };

    metodo_da_classe() {
        console.log(this.atributo);
    }
}

//OBJETOS da classe Pessoa

let pessoa1 = new Pessoa('leo', 'andrighetto', 'linhares');

console.log(pessoa1.atributo, pessoa1.atributo1, pessoa1.atributo2);


//DECLARANDO OBJETOS SEM CLASSE:

let obj = { nome: 'Leonardo', idade: 27, altura: 1.76, "Data de Nascimento": "20/02/1998" };
console.log("\n");
console.log("Nome: " + obj.nome + "\n" + "Idade: " + obj.idade + "\n" + "Altura: " + obj.altura);

console.log("Data de Nascimento: " + obj["Data de Nascimento"]);

let obj2 = obj;

obj.nome = "Mudou nome";

console.log(obj2.nome)

let obj3 = { ...obj };

console.log(obj3);

let obj4 = { ...obj3, nome: 'LALALA' };

console.log(obj4)

function exibir(objeto) {

    console.log(objeto.nome);
}

exibir(obj);

let Callback_de_exibir = exibir;

console.log(Callback_de_exibir);

Callback_de_exibir(obj4);


let exibirReverso = function () {
    console.log(obj.altura + "-" + obj.nome);
}

exibirReverso(obj);

///////////////////////////////////////////////////////
//CALLBACK E ARROW FUNCTION

function soma2(valor) {
    return valor + 2;
};

function soma3(valor) {
    return valor + 3;
};

function soma4(valor) {
    return valor + 4;
};

let array = [1, 2, 3];

function soma(lista, funcao) {
    let novo_array = [];
    for (let index = 0; index < array.length; index++) {
        novo_array.push(funcao(array[index]));

    } return novo_array;
}

console.log(soma(array, soma4));

