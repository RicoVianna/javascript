/*
function* cores() {
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
}

let itc = cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
*/

/*
function* contador() {
    let i = 0;
    while (true) {
        yield i++;        
    }
}
const itc = contador();
for (let i = 0; i < 10; i++) {
    console.log(itc.next().value);
}
*/

function* contador() {
    let i = 0;
    while (true) {
        yield i++;  
            if (i > 5){
                break;
            }
    }
}
const itc = contador();
for (let c of itc) {
    console.log(c);
}


