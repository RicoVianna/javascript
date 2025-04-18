function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 18){
                //criança
                img.setAttribute('src', 'homem_crianca.png')
            } else if (idade >= 18 && idade < 28) {
                //Jovem adulto
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade >= 28 && idade <= 50) {
                //Meia idade
                img.setAttribute('src', 'homem_meia_idade.png')
            } else {
                //terceira idade
                img.setAttribute('src', 'homem_idoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 18) {
                //criança
                img.setAttribute('src', 'mulher_crianca.png')
            } else if (idade >= 18 && idade <= 28) {
                //Jovem adulta
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade > 28 && idade <= 50) {
                //Meia idade
                img.setAttribute('src', 'mulher_meia_idade.png')
            } else {
                //terceira idade
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectanos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}