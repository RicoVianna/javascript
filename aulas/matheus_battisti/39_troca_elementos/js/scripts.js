//criar um elemento
var el = document.createElement('h3');
el.classList = 'testando_classe';
var texto = document.createTextNode('Este é o texto do h3');
el.appendChild(texto);
console.log(el);

//selecionar o elemento que quero trocar
var titulo = document.querySelector('#title');
console.log(titulo);

//selecionar o "pai" do elemento
var pai = titulo.parentNode;

//trocar os elementos
pai.replaceChild(el, title);


