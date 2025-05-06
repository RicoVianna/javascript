/*
Vamos entender "operadores":
=> Operadores JS são usados para atribuir valores, comparar os valores, executar as operações aritiméticas e muito mais.

São os sinais ue usamos: + - * / = ++ += -- -= && || etc

São separados em 6 categorias:
1 - Operadores aritiméticos (matemáticos);
2 - Operadores de atribuição;
3 - Operadores de sequência;
4 - Operadores de comparação;
5 - Operador condicional (ternário);
6 - Operadores lógicos.
*/

/*
var valor1, valor2, total;
valor1 = 5; 
valor2 = 2;

total = valor1 / valor2;
alert(total)
*/

/*OPERADORES MATEMÁTICOS
var valor1, valor2, total;
valor1 = 5; 
valor2 = 2;

total = --valor1; //o -- decrementa 1 na variável 
alert(total);
alert('O valor ficou: ' + valor1);
*/


/*OPERADORES DE ATRIBUIÇÃO
var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 -= valor2; //valor 1 recebe o valor 1 (=) mais o valor2 é o mesmo que (valor1 = valor1 + valor2);
alert(valor1)
*/

/*OPERADORES DE SEQUÊNCIA
var valor1, valor2, total;
valor1 = 'Dimitri ';
valor2 = 'Teixeira';

total = valor1 + valor2;
alert(total);
*/

/*OPERADORES DE COMPARAÇÃO
var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 !== '8'); //compara valores e tipo com 3 =(===). O primiero é número e o segundo é texto (aspas)
alert(total) //retorno é true(verdadeiro) ou false (falso)
*/

/*OPERADORES TERNÁRIOS
var idade, eleitor;
idade = 22;
eleitor = (idade < 18) ? 'Não Eleitor!': 'Sim, Eleitor';

alert(`A resposta é:  ${eleitor}. A idade dele é ${idade} `);
*/

//OPERADORES LÓGICOS
/*var idade, eleitor, resultado;
idade = 65;
eleitor = (idade < 18) ? 'Não Eleitor!': 'Sim, Eleitor';

resultado = (idade > 60 && idade < 70)
alert(resultado)
*/

/*
var idade, eleitor, resultado;
idade = 71;
eleitor = (idade < 18) ? 'Não Eleitor!': 'Sim, Eleitor';

resultado = (idade === 65 || idade === 72)
alert(resultado)
*/

/*var idade, eleitor, resultado;
idade = 64;
eleitor = (idade < 18) ? 'Não Eleitor!': 'Sim, Eleitor';

resultado = !(idade === 65)
alert(resultado)
*/

