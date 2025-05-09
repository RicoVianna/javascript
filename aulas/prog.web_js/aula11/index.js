/*ARRAYS
Os arrays javaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você pode dar para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle por ordem de posição dentro dele.

Ex:
Const lista - ['arroz', 'feijão', 'macarrão', 'leite'];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".
E assim por diante.
*/
//forma errada abaixo
/*var item1 = 'arroz';
var item2 = 'feijão';
var item3 = 'macarrão';
var item4 = 'Leite';
*/

 //(É A FORMA MAIS FACIL) 
                 //0       //1       //2        //3
/*
const lista = ['arroz', 'feijão', 'macarrão', 'leite'];
let x = lista[3];
alert(x);
*/

/*
const lista = ['arroz', 'feijão', 'macarrão', 'leite'];
lista[0] = 'café';
console.log(lista)
*/

/*
const pessoa = ['Dimitri', 'Teixeira', 30]//array
pessoa.[0]; //localiza pelo indice
*/

/*const pessoa = {Nome: 'Dimitri', Sobrenome: 'Teixeira', idade: 30}//objeto
pessoa.nome; //localiza pelo 'objeto nome'.
*/

/*PEGAR O ÚLTIMO ITEM
const pessoa = ['Dimitri', 'Teixeira', 30, 'Professor']//array
alert(pessoa[pessoa.length - 1]);// para medir a matriz(array), pega a quantidade de itens na matriz e subtrai 1 (porque ela começa em zero), e temos o último item.
*/

/*ACRESCENTAR UM ITEM - FORMA MAIS SIMPLES
const pessoa = ['Dimitri', 'Teixeira', 30, 'Professor']//array
pessoa.push('Brasileiro');
console.log(pessoa);
*/

/*ACRESCENTAR UM ITEM
const pessoa = ['Dimitri', 'Teixeira', 30, 'Professor']//array
pessoa[pessoa.length] = 'casado';
console.log(pessoa);
*/

//COMO SABER SE A VARIÁVEL É UMA MATRIZ(ARRAY)
const pessoa = ['Dimitri', 'Teixeira', 30, 'Professor']//array
const x = 'dimitri'
alert(Array.isArray(x));






/*igualmente funcional à lista acima
const lista = [ 
    'arroz',
    'feijão',
    'macarrão',
    'leite'
]
*/

/*a lista é criada vazia, e os valores são atribuidos posteriormente nos comandos abaixo da const.
const lista = [];
lista[0] = 'arroz';
lista[1] = 'feijão';
lista[2] = 'macarrão';
lista[3] = 'leite';
*/

/*abaixo temos outra forma de criar matrizes.
const lista = new Array('arroz', 'feijão', 'macarrão', 'leite');
*/

