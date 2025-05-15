for (var i = 10; i > 0; i--) {
    console.log(i);
    if (i === 5) {
        break;
    }
}
console.log('Deu o break!');

var x = 10;

while (x < 100) {
    x += 10;
    if (x === 60  || x === 90) {
        console.log('CONTINUE');//demonstra que pulou o os valores do if
        continue;//pula o 60 e o 90 e continua até chegar no 100
    }
    
    console.log('Testando continue ' + x);
}