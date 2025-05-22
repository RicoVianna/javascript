//Adicionar atritubos
var titulo = document.querySelector('#title');
titulo.setAttribute('class', 'testando_atributo');
console.log(titulo);

var botao = document.querySelector('#botao');
botao.setAttribute('disabled', 'disabled');
console.log(botao);

var subtitulo = document.querySelector('.subtitle');
subtitulo.setAttribute('id', 'sbtt');
console.log(subtitulo);

//remover atributos
var lista = document.querySelector('#lista');
lista.removeAttribute('id');



