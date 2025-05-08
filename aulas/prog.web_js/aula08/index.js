/* FUNÇÕES
Uma função é um bloco de códigos projetado para executar uma tarefa específica.
É como uma pequena "fábrica" onde você faz i,a emtrada e ele te dá uma saída.
Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o código.
Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/

/*FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}
document.getElementById('texto').innerHTML = soma(10, 23);
*/

/*FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}
var total = soma(10, 23);
alert(total);
*/

/*FUNÇÃO DE COTAÇÃO DE MOEDA
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}
var total = realParaDolar(9.5, 5.80);
alert(total);
*/

/*FUNÇÃO DE COTAÇÃO DE MOEDA
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}
var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);
alert('O valor em real é R$' + valorReal + ' o valor em dolar é U$' + total);
*/

/*function alertaHello() {
    alert('Olá, pessoal!');
}
alertaHello();
*/

function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}
var x = paraCelsius(77);
alert('A temperatura é de ' + x + ' graus celsius');



