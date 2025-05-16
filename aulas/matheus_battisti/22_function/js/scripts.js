function primeiraFuncao() {
    console.log('Hello World das funções!');
}
primeiraFuncao();

function segundaFuncao() {
    console.log('Segunda função Hello World!');
}
segundaFuncao();


function dizerNome(nome) {
    console.log('O nome é ' + nome);
}
dizerNome('Matheus');
dizerNome('Pedro');
dizerNome('Xavier');

var nomeDoBancoDeDados = 'João';
dizerNome(nomeDoBancoDeDados);

function escreverNome(nome) {
    console.log('O nome é ' + nome);
}
escreverNome('Ricardo');
escreverNome('Rodrigo');
escreverNome('Osmar');

function soma(a, b) {
    var resultado = a + b;
    return resultado;
}
var somaUm = soma(2, 5);
console.log(somaUm);
var somaDois = soma(6, 5);
console.log(somaDois); 
console.log(soma(4, 5));

//cria a função subtração com x e y, para depois ser "chamada" com os valores que serão subtraidos
function subtracao(x, y){
    var resultado = x - y; //cria a variável "resultado" que recebe o resultado
    return resultado; //retorna o valor da variável resultado para quem a chamou (no caso, "resultado" será atribuida à var "subtracao1" abaixo)
}
var subtracao1 = subtracao(7, 4);//atribui o resultado da subtração dos números entre parênteses à variável "subtracao1"
console.log(subtracao1); //imprime na tela o valor de "subtracao1"
//repete o comportamento das duas linhas de código acima
var subtracao2 = subtracao(9, 3);
console.log(subtracao2);