function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
        
     //Com o ID, eu consigo pegar o elemento input
    let pegarTarefa = document.getElementById("inputTarefa")   

    //peguei o valor de dentro do input
    let valorTarefa  = pegarTarefa.value    

    //com o id do elemento no "documento html", exibi como texto
    document.getElementById("mensagem").textContent = mensagem;  

    //console.log(valorTarefa)          TESTE DE CONSOLE


    //Com o ID, eu consigo pegar o elemento listaTarefas (lista)
    let listaTarefas = document.getElementById("listaTarefas")

    //Variável que vria um elemento li, uma lista não ordenada.
    let novaTarefa = document.createElement("li")

    //o elemento LI recebe o conteúdo de texto do input valorTarefa
    novaTarefa.textContent = valorTarefa


    //Pegamos o elemento ul do html e adicionamos o texto dentro da lista.
    listaTarefas.appendChild(novaTarefa)

    //limpamos o input.
    pegarTarefa.value = ""




}
