//selecionar o elemento
var title = document.querySelector('#title');

//innerHTML 
title.innerHTML = 'Textando o texto alterado!';


//textContent -> mais recomendado e utilizado
var subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContent = 'Alterando o segundo título!'