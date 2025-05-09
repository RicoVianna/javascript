/* SWITCH
É usado para realizar diferentes ações com base em diferentes condições no mesmo blodo de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado
*/

function diaDaSemana() {    
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0:
            //o que acontece
            document.getElementById('teste').innerHTML = 'Domingo';
            break;
        
        case 1:
            //o que acontece
            document.getElementById('teste').innerHTML = 'Segunda-feira';
            break;
    
        case 2:
            //o que acontece
            document.getElementById('teste').innerHTML = 'Terça-Feira';
            break;

            case 3:
            //o que acontece
            document.getElementById('teste').innerHTML = 'Quarta-Feira';
            break;

            case 4:
            //o que acontece
            document.getElementById('teste').innerHTML = 'Quinta-Feira';
            break;

            case 5:
            //o que acontece
            document.getElementById('teste').innerHTML = 'Sexta-Feira';
            break;

            case 6:
            //o que acontece
            document.getElementById('teste').innerHTML = 'Sábado';
            break;
        
        
            default:
            //o que acontece
            document.getElementById('teste').innerHTML = '[ERRO] - Digite um dia válido!'
            document.body.style.backgroundColor = 'gray';
    }
}

