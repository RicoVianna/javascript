function exibir(num) {//declara a função exibir que recebe o parâmetro "num"
    console.log('A operação resultou em ' + num);//imprime o resultado com a frase entre aspas
}

function soma (a, b, callback) {//declara a função soma com os parâmetros "a e b", e uma função callback
    var op = a + b;//faz o calculo
    callback(op);//"chama" a função callback passando o resultado da soma
}

function multiplicacao(a, b, cb) {//declara a função multiplicaçao com os parâmetros "a" e "b" e uma função callback(cb)
    var op = a * b; //faz o calculo e atribui a variável op
    cb(op);//chama o callback com o resultado
}

soma (2, 2, exibir);//Chama a função "soma" passando os valores entre parenteses e a função "exibir" como callback para exitir o resultado
multiplicacao (2, 4, exibir)//Chama a função "multiplicacao" passando os valores entre parenteses e a função "exibir" como callback para exitir o resultado