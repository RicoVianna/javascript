var x = 1;
var y = 3;

console.log(x, y);

function teste() {
    var z = 0;

    console.log(z);
}

teste();

//console.log(z); - a variável "z" está no escopo local (dentro de um bloco), então não pode ser lida fora do escopo

function testando() {
    var z = 5;

    console.log(z);
}

testando();

if (true) {
    var p = 9;

    console.log(p);
}

