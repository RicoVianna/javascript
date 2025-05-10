/*MANIPULAR DATAS EM JS
*/
let data = new Date();//comando base para pegar TUDO em data
//console.log(data)

let ano = data.getFullYear();//pegar ano com 4 digitos
console.log(ano)

let mes = data.getMonth();//pegar mês atual
//console.log(mes)
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];//mostrar o mes em número(do zero ao onze) 
const mesEscrito = mesesDoAno[data.getMonth()];//mostrar o mes escrito
console.log(mesEscrito)

let diaMes = data.getDate();//mostrar o dia do mês (1 à 31)
console.log(diaMes);

let diaSem = data.getDay();//mostrar o dia da semana (0 = domingo..... 6 = sábado)

const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const diaEscrito = diasDaSemana[data.getDay()];//mostrar dia escrito
console.log(diaEscrito);

let hora = data.getHours(); //pegar hora - de 0 a 23
console.log(hora);

let minuto = data.getMinutes(); //pegar minuto - de 0 a 59
console.log(minuto);

let segundo = data.getSeconds(); //pegar segundos - 0 a 59
console.log(segundo);

let miliSegundo = data.getMilliseconds(); //pegar segundos - 0 a 999
console.log(miliSegundo);

//PEGAR A DATA NO PADRÃO BRASILEIRO (ABAIXO)
let dataBr = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBr)

//PEGAR DATA NO PADRÃO BRASILEIRO SEPARADOS E DEPOIS CONCATENAR (JUNTAR)
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;//o "+ 1", porque o sistema começa com zero
ano = d.getFullYear();

function addZero(x) {return x < 10 ? '0' + x : '' + x;}

let dataPadraoBr = addZero(diaMes) + '/' + addZero(mes) + '/' + ano;
console.log(dataPadraoBr);

//COMPARAR DATAS - MAIOR OU MENOR. EX. VENCIMENTOS DE BOLETOS
var hoje = new Date();
var vencimento = new Date(2025, 4, 8);
if (hoje > vencimento) {
    console.log('Sua conta está vencida');
} else {
    console.log('Sua conta ainda não venceu')
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31);


//O omando .getTime() transforma as datas (DataFinal e DataInicial) em milisegundos
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

//pega a diferença em milisegundos e transforma em dias arredondando(.ceil) e atribui à variável "diferençaDias"     (h * min * seg * miliseg)
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))//esse calculo converte milisegundos em dias

console.log(diferencaDias + ' Dias');







