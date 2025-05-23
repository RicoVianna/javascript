//evento de mouseover
var titulo1 = document.querySelector('#title');
titulo1.style.color = 'darkblue';

titulo1.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
});

//evento de mouseout
titulo1.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightgreen';
});

//afetar outro elemento com mouseover
var subtitulo = document.querySelector('.subtitle');

subtitulo.addEventListener('mouseover', function() {
    var legenda = document.querySelector('#legenda');
    legenda.classList.remove('hide');
});

subtitulo.addEventListener('mouseout', function() {
    var legenda = document.querySelector('#legenda');
    legenda.classList.add('hide');
});
