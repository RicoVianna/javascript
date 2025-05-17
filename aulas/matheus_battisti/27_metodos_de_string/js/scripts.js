//length
var nome = 'Matheus';
console.log(nome.length);//é preciso digitar o nome da variável antes da propriedade (nome.length)

var obj = 'Bola';
console.log(obj.length);

//indexOf
console.log(nome[2]);
console.log(obj[1]);

var frase = 'O rato roeu a roupa do rei de Roma';
console.log(frase[18])//espaços são considerados na contagem
console.log(frase.indexOf('roeu'));

//slice
var roeu = frase.slice(7, 11);
console.log(roeu);

//replace
var novaFrase = frase.replace('roeu', 'teste');
console.log(novaFrase);