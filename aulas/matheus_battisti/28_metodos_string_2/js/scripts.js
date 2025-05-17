//toLowerCase e toUpperCase
var frase = 'Esta é a frase que vamos manipular';
var fraseCaixaAlta = frase.toUpperCase();
console.log(fraseCaixaAlta.toUpperCase());
console.log(frase.toLowerCase());

//trim
var nome = '    Matheus     ';
var nomeTrim = nome.trim();
console.log(nome);
console.log(nomeTrim);

//split
console.log(frase.split(' '));
var tags = 'PHP, JavaScript, HTML, CSS';
console.log(tags.split(','));

//lastIndexOf
var frase2 = 'Eu quero a última palavra teste desta frase de teste';
console.log(frase2.indexOf('teste'));
console.log(frase2.lastIndexOf('teste'));



