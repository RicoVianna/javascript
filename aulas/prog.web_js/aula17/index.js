/*CLASSES EM JS
Em 2015 foi introduzido no JavaScript as classes. As  classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no JavaScript isso é relativamente novo, por isso mesmo que programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Pode-se dizer que são "funções especiais" para a criação de objetos.

Assim como uma fábrica da vida real precisa de máquinas para construir os objetos, as classes no JavaScript usam um método chamado constructor() para fabricar objetos.
*/

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + ' Buzinou: Biiiiiiiiii';
    }
}
const uno = new Carro('Fiat', 'Uno', 2001);
console.log(uno.ano);



