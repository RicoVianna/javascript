//setTimeout
console.log('Antes do setTimeout');//fora do bloco não espera o tempo dentro do bloco

setTimeout (function() {
    console.log ('Testando o setTimeout')//imprime após o tempo determinado abaixo
}, 2000); //(é em mili segundos, então 1000 é um segundo)

console.log('Depois do setTimeout');//fora do bloco não espera o tempo dentro do bloco

//setInterval
setInterval (function() {
    console.log('Testando setInterval');    
}, 1000);