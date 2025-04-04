let tarefas = []

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
        tarefas.push(tarefa)      
        renderizarTarefas()
    }
    inputTarefa.value = "" 
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas") 
    listaTarefas.innerHTML = ''

    let i = 0
    for (i; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li") 
        novaTarefa.textContent = tarefas[i]    
        listaTarefas.appendChild(novaTarefa) 
    }

    
}