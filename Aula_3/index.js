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

let obj = {nome: 'Leonardo', idade: 27, altura: 1.76, "Data de Nascimento": "20/02/1998"};
console.log("\n");
console.log ("Nome: " + obj.nome + "\n" + "Idade: " + obj.idade + "\n" + "Altura: " + obj.altura);

console.log("Data de Nascimento: "+ obj["Data de Nascimento"]);