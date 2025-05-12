
//declara a variável "nome, que recebe 'Pedro'"
/*
var nome = 'Pedro'; 


//cria a função "dizerNome" 
function dizerNome() {
    nome = 'João';//atribui "joão" à variável "nome" (não se comunica com a variável "Pedro", declarada no início do código)
    console.log('O nome é ' + nome);//imprime o nome no "inspecionar". Não sofre ação do escopo global (fora da função) porque uma função é um bloco "mais importante"
}

if(true) {//cria a condição "if" sem relação com a lógica, apenas para seguir o programa
    var nome = 'Salete';//troca a variável "pedro" por "salete", pois está no escopo global, e o escopo global está misturado com os blocos de "menor valor"
}

console.log(nome);
dizerNome();
*/

/*
let nome = 'Pedro';

function dizerNome() {
    var nome = 'João';
    console.log('O nome é ' + nome);
}

if(true) {
    let nome = 'Salete';
    console.log(nome)
}

console.log(nome);
dizerNome();

for(let i = 0; i < 3; i++) {
    let nome = 'Anísio';
    console.log(nome)
}
*/

let nome = 'Pedro';
const numero = 1;

function dizerNome() {
    var nome = 'João';
    console.log('O nome é ' + nome);
}

if(true) {
    let nome = 'Salete';
    const numero = 2;
    console.log(nome)
    console.log(numero);

}

console.log(nome);
dizerNome();

for(let i = 0; i < 3; i++) {
    let nome = 'Anísio';
    const numero = 3;
    console.log(nome)
    console.log(numero)
}
