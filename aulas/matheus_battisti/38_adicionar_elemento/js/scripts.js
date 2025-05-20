//criar elemento
var el = document.createElement('div');//cria o elemento div e atribui á variável "el"
el.classList = 'div_criada';//cria uma classe para a variável el com o nome "div_criada"
console.log(el);//imprime console.log a div com a classe
var container = document.querySelector('#container');//cria a variável "container" e seleciona o id "container"
container.appendChild(el);//inclui o elemento filho "el" na variável container (que representa o "id container")

//inserBefore
var el2 = document.createElement('div');//cria a div e atribui à variável "el2".

el2.classList = 'div_before'; //cria uma classe para a div (variável "el2") com o nome "div_before"

var el3 = document.querySelector('#container .div_criada');//seleciona o primeiro elemento com a classe "div_criada" dentro do elemehto com "id container"  e armazena na variável "el3";

console.log(el3);

container.insertBefore(el2, el3);//insere o "el2" antes do "el3"

