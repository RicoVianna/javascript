/*
let n = 0;

while (n < 5) {
    console.log(n);
    n++;
}
*/

// 5*4*3*2*1 = 120

let n = 10; //número do qual queremos calcular o fatorial
let fat = 1;

while (n >= 1) {    
    fat *= n;
    n--;    
}

console.log(fat);