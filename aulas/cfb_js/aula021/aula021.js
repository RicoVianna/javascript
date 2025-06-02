//Os parênteses do function são a declaração (preparação) da função
//Os parênteses fora do function são a chamada para execução da função
//O conteúdo entre parênteses e aspas é o que vai ser impresso
function canal() { 
    let n1 = 7;
    let n2 = 3;
    let res = n1 * n2;  
    if (res % 2 == 0)  
        return 'Par';
    else 
        return 'Ímpar';
}

let res = canal();

console.log(res);


