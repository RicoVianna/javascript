for (var i = 0; i <= 10; i++) {
    console.log('Repetindo for ' + i);
}

var arr = [1,2,3,4];
//cria a variável "j" e a atribui ao array (j < arr.length)
for(j = 0; j < arr.length; j++) { 
    console.log(arr[j]);//atribui "j" ao array
}
console.log(arr.length); //indica o comprimento do array (quantos elementos tem dentro dele)

for(var x = 5; x < 100; x *= 3) {
    console.log(x);
}