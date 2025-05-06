/* 
Variáveis são recipientes onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor

No JS temos 3 palavras-chaves para declarar variáveis:
-> var;
-> let;
-> const.
*/

/*
var pote = 'bombom';
alert(pote);
*/

/*
var a = 2;
var b = 3;
var c = a + b;
alert(c);
*/

/*var a, b, c; //declaração de variáveis
var a = 2; //atribuição dos valores das variáveis
b = 3; //atribuição dos valores das variáveis
c = a + b; //atribuição dos valores das variáveis
var a = 5;
alert(a) //comando para imprimir o que "c" sugere
*/

/*
var nome, sobrenome, nomeCompleto, idade, soma;
nome = 'Dimitri';
sobrenome = 'Teixeira';
idade = 30;
nomeCompleto = nome + ' ' + sobrenome;
soma = idade + 10;
pessoa = nome + ' ' + soma;
document.getElementById('texto').innerHTML = pessoa;
*/

/*var pessoa = 'Dimitri';
var pessoa = 'João';
alert(pessoa);
*/

/*var x = 10; //x vale 10 fora do bloco
{
    var x = 2; //var x é redefinida e passa a  valer 2, tanto dentro desse bloco (entre chaves) como fora   
}
document.getElementById('texto').innerHTML = x //x vale 2 pois foi redefinida pelo bloco
*/

/*
let x = 10; //x será 10 fora do bloco abaixo
{
    let x = 2; // x será 2 apenas dentro do bloco
    document.getElementById('texto').innerHTML = x
}
//document.getElementById('texto').innerHTML = x
*/

//É recomendável usar "let" para tudo, e se ela precisar sofrer alguma alteração em seu valor, cria-se um bloco específico pra isso

const x = 10; //x será 10 fora do bloco abaixo
{
    const x = 2; // x será 2 apenas dentro do bloco
    document.getElementById('texto').innerHTML = x
}
document.getElementById('texto').innerHTML = x

