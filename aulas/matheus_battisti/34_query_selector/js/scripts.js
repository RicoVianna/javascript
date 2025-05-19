var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

//querySelectorAll - pega vários elementos
var itensQuery2 = document.querySelectorAll('#lista2 li');
console.log(itensQuery2);

var itensQuery1 = document.querySelectorAll('#lista .item');
console.log(itensQuery1);

//querySelector - pega apenas um elemento (o primeiro que achar)
var lista = document.querySelector('#lista .item');//pega o primeiro item que achar
console.log(lista);

var span = document.querySelector('#paragrafo span');
console.log(span);


