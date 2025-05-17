//parseFloat = para ponto flutuante
console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

//parsInt - transforma o número em inteiro
console.log(parseInt('10'));
console.log(parseInt(16.96));

//toFixed - limita as casas decimais do número
console.log(23.5125419.toFixed(1));

//isNaN - verifica se é um número
console.log(isNaN('teste')); //é um "não é um número"
console.log(isNaN(12)); // não é um "não é um número"
console.log(isNaN('14')); // confunde com número, apesar de ser uma string(estar entre aspas)

//MAX_VALUE e MIN_VALUE - números máximos e mínimos que o js aceita
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(2.7976931348623157e+308);



