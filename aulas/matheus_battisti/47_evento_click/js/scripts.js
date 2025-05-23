//inserir click
var botao = document.querySelector('#btn');

console.log(botao);

botao.addEventListener('click', function() {
    console.log('Clicou');

    console.log(this);
    this.style.color = 'red';
});

//click afetando outros elementos
var titulo = document.querySelector('#title');

titulo.addEventListener('click', function() {
    var subtitulo = document.querySelector('.subtitle');
    subtitulo.style.display = 'none';
});

//double click
var subtitulo = document.querySelector('.subtitle');
subtitulo.addEventListener('dblclick', function() {
    console.log('Click duplo!');
})