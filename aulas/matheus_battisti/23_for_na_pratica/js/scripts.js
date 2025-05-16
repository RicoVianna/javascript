var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'limão'];

var listaUl = document.createElement('ul');//cria a ul

var corpo = document.getElementsByTagName('body');

console.log(corpo[0]);

corpo[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);

for (var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}
