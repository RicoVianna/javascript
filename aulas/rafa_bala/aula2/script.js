function adicionarTarefa() {

    const inputTarefa = document.getElementById("inputTarefa") 
    var tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        var mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro 
    } else {
        var mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso

        const listaTarefas = document.getElementById("listaTarefas") 
        var novaTarefa = document.createElement("li") 
        novaTarefa.textContent = tarefa     
        listaTarefas.appendChild(novaTarefa) 
    }
    inputTarefa.value = "" 
}