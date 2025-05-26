"use strict"

//var
//a variável "nome" foi declarada dentro do escopo abaixo
//"var" permite que a variável seja utilizada fora do escopo, e isso é uma desvantagem, pois pode bagunçar o código
/*if (true) {//bloco if
    var nome = "Bruno";//variável dentro do bloco
}
console.log(nome)//imprimindo a variável fora do bloco mesmo ela não pertencendo ao escopo "if". (falha)
*/

//let
//console.log(nome); -POR ESTAR FORA DO BLOCO ABAIXO, NÃO ACESSA A VARIÁVEL LET (POR SER LET)
function teste() {    
    if (true) {//cria o escopo
        let nome = "Ricardo";//declara a variável dentro do escopo       
        console.log('Dentro do if do teste: ' + nome); //está dentro do escopo, então acessa a variável
    }
    //console.log('fora do if e dentro de teste: ' + nome);//está dentro do escopo, então acessa a variável
}

teste();
//console.log('Fora de teste: ' + nome);
//console.log(nome);-POR ESTAR FORA DO BLOCO ABAIXO, NÃO ACESSA A VARIÁVEL LET (POR SER LET) E DÁ ERRO

let cursos = 'CFB CURSOS';//cria a variavel
cursos = 'CURSOEMVIDEO';//altera a variável
cursos = '10';
console.log(cursos);//imprime a variável (alterada, nesse caso)


///const - NÃO PODE SER ALTERADA
const curso = 'JavaScript';

//curso = 'HTML'; //TENTA ALTERARA VARIÁVEL, MAS CONST NÃO PODE SER ALTERADA

console.log(curso);//IMPRIME A VARIÁVEL (CONST)
