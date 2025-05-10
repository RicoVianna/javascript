/* LAÇOS DE REPETIÇÃO FOR
Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.
*/

/*
for (let i = 0; i <= 10000; i++) {
    document.getElementById('teste').innerHTML += `${i}, `
}
*/

/*
let ano = new Date().getFullYear();
for(ano; ano >= 1900; ano--) {
    document.getElementById('ano').innerHTML += "<option value='"+ano+"'>"+ano+"</option>";
}
*/
const carros = ['Gol', 'Fusca', 'Brasília', 'Del Rey', 'Chevette'];
var tamanho = carros.length;
for(let i = 0; i < tamanho; i++) {
    document.getElementById('teste').innerHTML += carros[i] + ' - ';
}