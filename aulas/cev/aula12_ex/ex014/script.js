function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'amanhecer.png'
        document.body.style.background = '#e2cd9f' //Encontra o body (parte que quer alterar sem precisar criar um id ou class para o elemento). Basta digitar "document." seguido do elemento que quer alterar, depois é só alterar pelo "style"
    } else if(hora >=12 && hora < 18) {
        //boa tarde
        img.src = 'entardecer.png'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'anoitecer.png'
        document.body.style.background = '#515154'
    }

}