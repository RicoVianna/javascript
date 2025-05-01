function adicionarTarefa() { //Função que é acionada quando o usuário clica no botão "Adicionar Tarefa"

    let mensagem = "Tarefa adicionada com sucesso!" //mensabem que é exibida quando uma tarefa é adicionada

    let inputTarefa = document.getElementById('inputTarefa') //cria a variável "inputTareva e atribui a ela o campo onde o usuário digita a tarefa. (apenas o campo, não o conteúdo)"
    let tarefa = inputTarefa.value.trim() //cria a variável "tarefa" e atribui a ela o valor digitado no campo do comando acima (inputTarefa)

    let mensagemElemento = document.getElementById('mensagem') //cria a variável "mensagemElemento" e atribui a ela o parágrafo onde será exibida a mensagem de sucesso ou erro

    if (tarefa === '') { //Verifica se o campo está vazio (sem nenhuma tarefa digitada)
        mensagemElemento.textContent = 'Digite uma tarefa antes de adicionar' //exibe a msg entre aspas caso não tenha uma tarefa digitada
        return //interrompe a execução da função para evitar adicionar uma tarefa vazia
    }

    document.getElementById('mensagem').textContent = mensagem // pega o elemento pelo id "mensagem" e atribui a ele o valor da variável "mensagem" criada na linha 3 do código (caso uma mensagem válida tenha sido adicionada)

    let listaTarefas = document.getElementById('listaTarefas') //cria a variável "listaTarefas" e a atribui ao id "listaTarefas"(de mesmo nome) dentro da lista desordenada (ul) onde as tarefas serão adicionadas
    let novaTarefa = document.createElement('li') //cria a variável "novaTarefa" e a faz receber o elemento (tag) "li" para representar a nova tarefa

    novaTarefa.textContent = tarefa //inclui na variável "novaTarefa" (que é a tag "li") o conteúdo de texto (digitado pelo usuário)

    listaTarefas.appendChild(novaTarefa) //pegamos o elemento "ul" e adiciona um elemento filho (appendChild) "li", já com o valor do texto "tarefa"

    inputTarefa.value = '' //limpa o input da tarefa anterior e o prepara (deixa vazio) para receber a nova tarefa.
}