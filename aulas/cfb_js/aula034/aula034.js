// function msg() {
//     alert('Clicou');
// }

//const c1 = document.getElementById('c1');
//const c1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.curso')];

cursos.map((el)=>{
    el.addEventListener('click', (evt)=> {
        const el = evt.target;
        el.classList.add('destaque');
        console.log(el.innerHTML + ' Foi clicado')
    })
})

// const msg=()=>{
//     alert('Clicou');
// }

// c1.addEventListener('click', ()=>{
//     alert('Clicou');
// });

// c1.addEventListener('click', (evt)=>{
//     const el = evt.target
//     el.classList.add('destaque');
// });


