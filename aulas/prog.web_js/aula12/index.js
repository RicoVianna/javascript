const jogadores = ['Biro biro', 'Ribamar', 'Pelé', 'Maradona', 'Neymar', 'Messi', 'Cristiano Ronaldo', 'Dimitri', 'Vampeta']
//const craques = jogadores.slice(2, 7)

//pessoa.pop(); //tira o último item da lista (professor)
//pessoa.push('Qualquer coisa');//adiciona no fim da matriz
//pessoa.shift(); //remove o primeiro item da matriz(Dimitri)
//pessoa.unshift('dev');//Adiciona o item na primeira posição da matriz
//delete pessoa[0]; //deleta mas não redefine as posições(torna a posição "undefined") - NÃO RECOMENDADO
//pessoa.splice(1, 0, 'Item adicionado 1', 'Item adicionado 2'); //adiciona elementos. O "1" indica a posição que o elemento será adicionado, e o "0" indica quantos serão removidos. Se no lugar do zero tiver outro número, o item adicionado sobrescreverá o item da posição

//const superLista = lista1.concat(lista2, lista3)

//const jogOrdem = jogadores.sort(); //metodo para deixar em ordem alfabetica

//jogadores.sort(); //para deixar em ordem alfabética ao contrário, primeiro deixe em ordem alfabética
//jogadores.reverse(); //e depois o comando "reverse" posiciona ao contrário

const numeros = [40, 100, 1, 5, 25, 10]
//numeros.sort(function (a, b) {return a - b});//função que precisa ser decorada para colocar números em órdem crescente (a - b) e decrescente (b - a)
const maior20 = numeros.filter(filtragem)

document.getElementById('teste').innerHTML = maior20;//.join(' - ');

/*function maiorNumero(array) {//para pegar maior número, cria-se a função
    return Math.max.apply(null, array); //aplica este comando
}
*/
//para pegar o menor número, cria a função "menorNumero" e substitui o "max" por "mim" no comando do "return"

function filtragem(value, index, array) {
    return value > 20;
}

