/*
const jogador1 = {nome: 'Bruno', energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: 'bruce', energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1, ...jogador2}

//console.log('n1: ' + n1);
//console.log('n2: ' + n2);
console.log(jogador3);
*/

const objs1 = document.getElementsByTagName('div');
const objs2 = [...document.getElementsByTagName('div')];

objs2.forEach(element => {
    element.innerHTML = 'Curso';
});

console.log(objs1);
console.log(objs2);
