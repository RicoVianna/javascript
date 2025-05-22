//clearTimeout
var x = 0;

var myTimer = setTimeout(function() {
    console.log('0 x 0 é 0');
}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(myTimer);
    console.log('O x passou de 0');
}

//clearinterval
var myInterval = setInterval(function() {
    console.log('Imprimindo interval');
}, 3000);

setTimeout(function() {
    console.log('Não precisamos mais repetir');
    clearInterval(myInterval);
}, 6000);

