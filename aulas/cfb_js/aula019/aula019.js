let n = 0;
let max = 1000;
pares = 0;

/*
while (n < max) {
    console.log('CFB Cursos - ' + n);
    if (n > 10) {
        break;
    }
    n++;
}
console.log('Fim do Programa!');
*/

for (let i = n; i < max; i++) {
    if (i % 2 != 0) {
        continue;
    }
    pares++
}
console.log('Quantidade de Pares: ' + pares);
console.log('Fim do programa!');