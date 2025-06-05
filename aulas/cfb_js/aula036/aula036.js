const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const btn_transferir = document.querySelector('#btn_transferir');
const todosCursos = [...document.querySelectorAll('.curso')];
const cursosCopiados = document.querySelectorAll('.selecionado');

todosCursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        const curso = evt.target;
        curso.classList.toggle('selecionado');
    })
})

btn_transferir.addEventListener('click',()=> {
    const cursosSeleconado = [...document.querySelectorAll('.selecionado')];
    const cursosNaoSeleconado = [...document.querySelectorAll('.curso:not(.selecionado)')];
    cursosSeleconado.map((el)=> {
        caixa2.appendChild(el);
    });
    cursosNaoSeleconado.map((el)=> {
        caixa1.appendChild(el);
    });
});

