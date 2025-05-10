/*JSON

JSON significa JavaScript Object Notation, que traduzido para o portugês fica algo como "notação de objeto JavaScript"
Explicando de um modo simples, JSON é basicamente uma forma de converter um objeto em texto e o contrário também (um texto em um objeto)

Ele é usado prindipalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no JavaScript, usamos dois métodos:
1 -> JSON.parse() -> Converte texto no padrão JSON em objetos;
2 -> JSON.stringfy() -> Converte objetos em textos padrão JSON
*/

/*const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001
}

let texto = JSON.stringify(carro);//convete o objeto para texto
document.getElementById('area').innerHTML = texto;//imprime o texto convertido no HTML

let objeto = JSON.parse(texto);//converte o texto para objeto
console.log(objeto.modelo); //pegamos o valor deste objeto (no console.log)
*/

/*
const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    motor: ['1.6', '1.4', '1.0']
}

let texto = JSON.stringify(carro);
document.getElementById('area').innerHTML = texto;

let objeto = JSON.parse(texto);
console.log(objeto.motor[0]); 
*/

function buscarCep() {
    let input = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/')
    ajax.send();

    ajax.onload = function() {
        document.getElementById('texto').innerHTML = this.responseText;
        //transforma o texto em objeto(abaixo)
        let objeto = JSON.parse(this.responseText);

        //pega os valores desejados(abaixo)
        let logradouro = objeto.logradouro;
        let cidade = objeto.localidade;
        let estado = objeto.uf;
        document.getElementById('texto').innerHTML = 'Logradouro: ' +  logradouro + '<br> Cidade: ' + cidade + '<br> Estado: ' + estado;
    }
}

