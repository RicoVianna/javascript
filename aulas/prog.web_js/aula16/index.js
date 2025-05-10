/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem

Os dois métodos-chaves para usar com JavaScript são:

1 - setTimeOut(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número específico de milisegundos;

2 - setInterval(function, milliseconds)
-> É o mesmo que o setTimeOut, mas repete a função continuamente
*/

/*
function ativarContagem() {
    document.getElementById('tempo').innerHTML = 'Começou a contar!';
    tempo = setTimeout(function() { //ativa a função quando der o tempo  
        document.getElementById('tempo').innerHTML = 'Executou o setTimeOut';   
        document.body.style.backgroundColor = 'lightgrey'
    }, 3000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = 'Parou a contagem!';
}
*/

function ativarContagem() {
    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) -1 ;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = 'Tempo esgotado';
            pararContagem();
        } else {
            document.getElementById('tempo').innerHTML = soma; 
        }        
    }, 1000)
}




