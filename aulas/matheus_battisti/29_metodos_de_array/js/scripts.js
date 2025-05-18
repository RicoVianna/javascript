//length
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);

//push
arr.push(6); //adiciona elemento ao fim do array
arr.push('Qualquer coisa'); //pode add qualquer coisa
console.log(arr);

//pop
arr.pop(); //elimina o último elemento do array
console.log(arr);

//unshif
arr.unshift(0); //adiciona elemento no início do array
arr.unshift('teste'); //pode adicionar qualquer coisa
console.log(arr);

//shift
arr.shift(); //elimina elemento do início do array
console.log(arr)

//acessar o último elemento do array
console.log(arr[arr.length - 1]); //como começa no zero, o "-1" pega o tamanho do array (no caso, 7 [do 0 ao 7] e diminui um para chegar no 6)

//isArray
console.log(Array.isArray(5));
console.log(Array.isArray(arr));




