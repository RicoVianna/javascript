function adicionarTarefa() {

    const inputTarefa = document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value.trim() //"trim() tira os espaços no início e no fim do texto, mantendo o espaço entre palavras"
    const mensagem = document.getElementById('mensagem')

    if (tarefa == '') {
        let mensagemErro = "Digite uma tarefa para adicionar!"
        mensagem.textContent = mensagemErro
        mensagem.style.color = '#A34743'
    } else {
        let mensagemSucesso = 'Tarefa adicionada com sucesso!'
        mensagem.innerHTML = mensagemSucesso
        //mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28A745"

        const listaTarefas = document.getElementById('listaTarefas') 
        let novaTarefa = document.createElement('li')
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }  

    inputTarefa.value = ''
    //se o valor do input for vazio, mostre uma mensagem de erro para o usuário


}