/* OPERADORES RELACIONAIS
> ----> maior
< ----> menor
>= ---> maior ou igual
<= ---> menor ou igual
== ---> igual
!= ---> diferente
*/

let num1 = 10;
let num2 = 5;
let num3 = 10;

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 != num3);
console.log(num1 >= num3);
console.log(num1 <= num3);
console.log(num1 == num3);
//INVERSÃO
console.log(!(num1 == num3)); //o "!" cria a negação e inverte a resposta lógica. "num1" é igual a "num3, mas o "!" fora do par de parenteses de "num1 e num2" inverte a resposta lógica, trazendo "false" (sendo que era verdadeiro) - num1 não é igual a num3.
console.log(!(num1 != num3))//o "!" cria a negação e inverte a resposta lógica e segue o comentári acima
