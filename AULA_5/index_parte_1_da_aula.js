// function teste(v, a) {
//     console.log(v);
//     console.log(a);
//     return true;
// }

// let b = teste(1, 2);

// console.log(b)

// //se uma função não retorna nada ela é -undefined-.

// //iF É UM BLOCO DE CÓDIGO PROCEDURAL, ou seja, utliizando o if, o código não se caracteriza com expressão.

// //ARROW FUNCTION

// let a = () => {
//     console.log('ArRoW FuNcTiOn');
// }

// a();

// let função = (a,b) => (a+b*2)/4;

// console.log(função(1,2));

// // Arrow function não possui escopo THIS

// // let pessoa = {nome:'Leonardo',
// //     exibir_nome: () =>{console.log(this.nome);
// //     }
// // }

// // pessoa.exibir_nome(); // TypeError: Cannot read properties of undefined (reading 'nome')

// let pessoa_1 = {nome:'Leonardo',
//     exibir_nome: function(){console.log(this.nome);
//     }
// }
// pessoa_1.exibir_nome();

function usandolet() {
    let array = [4, 3, 2, 1];
    for (let index = 0; index < array.length; index++) {
        var element = array[index] + 10;
        let func = () => console.log(element);
        setTimeout(func, 1000);
        console.log(index);
        console.log("");
    }
}

usandolet();

console.log(`Esta é a
primeira linha.
Esta é a segunda linha.`);