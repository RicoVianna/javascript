var obj = {
    nome: 'Matheus',
    idade: 29,
    profissao: 'Programador',
    estáTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log('O meu nome é ' + obj.nome + '.');
console.log('Eu tenho ' + obj.idade + '.');
console.log('Sou ' + obj.profissao + '!')

obj.nome = 'Pedro';
obj.idade = 48;
obj.profissao = 'Desenvolvedor';

console.log(obj.nome);

console.log(obj)

console.log('O meu nome é ' + obj.nome + '.');
console.log('Eu tenho ' + obj.idade + '.');
console.log('Sou ' + obj.profissao + '!')

