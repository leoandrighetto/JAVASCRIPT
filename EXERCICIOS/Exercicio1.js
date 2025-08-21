
let lista = [2,6,5,5,5,5,4,2]
let nova_lista = []

for (let i of lista) if (i % 2 == 0) {
    nova_lista.push(i);
}

console.log(nova_lista)
