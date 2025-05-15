var x = 1;
var y = 2;

//soma
console.log(x = x + y); //3
console.log(x += y); //5

//subtração
//console.log(x = x - y);
console.log(x -= y); //3

//multiplicação
//console.log(x *= x * y);
console.log(x *= y); //6

//divisão
//console.log(x = x / y);
console.log(x /= y); //3

//loops
console.log(x++);
console.log(x--);

while (x <= 100) {
    console.log(x);
    x *= 2;
}

console.log(x);

var j = 5;

while (x > 5) {
    console.log(x);
    x -= j;
}