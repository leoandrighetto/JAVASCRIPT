let array = [{'ativo': true}, {'ativo': false}];

let array_novo = array.filter((dicionario) => dicionario['ativo'] === true);

console.log(array_novo);
