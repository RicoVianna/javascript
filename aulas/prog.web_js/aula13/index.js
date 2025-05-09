/* if e else */

/*var interruptor = 'off';

if (interruptor == 'on') {
    alert('A lâmpada está ligada')
} else {
    alert('A lâmpada está desligada')
} 
*/

/*
]var hora = new Date().getHours();
alert(hora)

if (hora < 12) {
    alert('Bom dia')
} else if (hora < 18) {
    alert('Boa tarde')
} else {
    alert('Boa noite')
}
*/

function verificar() {
    let nome = document.getElementById('nome').value;

    if (nome == '' || nome == null) {
        let p = document.getElementById('teste')
        p.innerHTML = 'Por favor, digite seu nome'
        p.style.color = 'red'
    } else {
        let p = document.getElementById('teste')
        p.innerHTML = '<strong>Obrigado</strong>'
        p.style.color = 'darkgreen'
    }
}
