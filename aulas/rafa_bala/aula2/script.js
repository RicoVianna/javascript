function adicionarTarefa() {

    var mensagem = "Tarefa adicionada com sucesso!" //salva a mensagem para exibi-la quando a tarefa for adicionada 

    var inputTarefa = document.getElementById("inputTarefa") //procura a variável que tem o id "inputTarefa"

    var tarefa = inputTarefa.value //O valor que for digitado fica salvo na variável "tarefa"

    document.getElementById("mensagem").textContent = mensagem //Exibe a mensagem de confirmação, encontrando o elemento com o id "mensagem"
    
    var listaTarefas = document.getElementById("listaTarefas") //Encontra o elemento com o id "listaTarefas"
    var novaTarefa = document.createElement("li") //Cria um novo item de lista (li)para adicionar à lista de tarefas

    novaTarefa.textContent = tarefa //Atribui o texto digitado pelo usuário ao novo itel de lista
    
    listaTarefas.appendChild(novaTarefa) //Adiciona o novo item de tarefa à lista existente   

    inputTarefa.value = "" //limpa o campo de entrada, deixando-o vazio após a tarefa ser adicionada
}