//inserir elemento no body
var novoParagrafo = document.createElement('p');
console.log(novoParagrafo);

var texto = document.createTextNode('Este é o parágrafo criado');
novoParagrafo.appendChild(texto);

var corpo = document.querySelector('body');
corpo.appendChild(novoParagrafo);


//inserir em um container
var container = document.getElementById('container');
console.log(container);

var el = document.createElement('span');
el.appendChild(document.createTextNode('Texto do span'));
console.log(el);
container.appendChild(el);


