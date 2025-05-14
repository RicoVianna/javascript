var x = 0;

while (x <= 4) {
console.log('Testando repetição ' + x);
x++;
}

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while (y <= 3) {//atribui "y" ao array como indice
    console.log(arr[y]);//acesso ao índice do array com a variável "y"
    y++;//acrescenta mais uma palavra do índice
}

var palavra = 'Matheus';
var i = 0;

while (i <= 6) {//acessa cada letra da palavra através da variável criada e atribuida (i)
    console.log(palavra[i]);//acesso o indice (letra por letra) da variável "palavra" pela variável "i", que começa em 0 (0 = m, 1 = a, .....6 = s)
    i++;
}
