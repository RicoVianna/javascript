//splice
var arr = [1, 2, 3, 4, 5];//adiciona elementos no meio do array
arr.splice(2, 0, 999);//o "2" é o anterior a adição. O "0" significa que nada será removido, e o "999" é o que será adicionado
console.log(arr);

arr.splice(4, 1);// "4" é o indice que será removido. "1" indica para qual lado será removido
console.log(arr);

//indexOf
console.log(arr.indexOf(5));//acha o índice solicitado(no caso, 5)

//join transforma array em string
var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma.'];//retornou a string separada por vírgula
console.log(arr2.join(','));//adicionou a vírgula, mas poderia ser ponto, espaço ou outra coisa

//reverse
console.log(arr2.reverse()); //inverte a ordem escrita (de tras pra frente)



