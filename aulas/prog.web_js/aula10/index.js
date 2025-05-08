/*EVENTOS
Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja abaixo os mais utilizados:

onclick -> Disparado quando recebe um click;
ondblclick -> Disparado quando recebe click duplo;
onmouseover -> Disparado quando o mouse está sobre a área do elemento;
onmouseout -> Disparado quando o mouse é movido para fora do elemento;
onmousemove -> Disparado quando o mouse é movido dentro do elemento;
onmousedown -> Disparado quando o clique do botão é disparado;
onmouseup -> Disparado quando o clique do botão é liberado;
onfocus -> Disparado quando o elemento recebe o foco;
onchange -> Disparado quando existe uma mudança no conteúdo. "ao mudar";
onblur -> Disparado quando o elemento perde o foco;
onkeydown -> Disparado quando uma tecla é pressionada;
onkeypress -> Disparado quando uma tecla é pressionada e solta;
onkeyup -> Disparado quando uma tecla é solta sobre um elemento;
onload -> Disparado quando a pagina terminou de ser carregada;
onresize -> Disparado quando há um redimencionamento da janela.
*/

function eventoClick() {
    //alert('Acionou um evento de click')
    document.body.style.backgroundColor = 'yellow'
}



/*function eventoDblClick() {
    alert('Acionou um evento de duplo click')    
}
*/

function viraVermelho() {
    let div = document.getElementById('teste');   
    div.style.backgroundColor = 'red';
}
function viraAzul() {
    let div = document.getElementById('teste');   
    div.style.backgroundColor = 'blue';
}

/*
function adicionaTexto() {
    let p = document.getElementById('texto');
    p.append('O mouse moveu');
}
*/

/*
function limpaTexto() {
    document.getElementById('campoTexto').value = '';
}
*/

function mudou() {
    console.log('mudou')
}

function teclaPressionada() {
    
    console.log('Tecla pressionada')   
    
}



