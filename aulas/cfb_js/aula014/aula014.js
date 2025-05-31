let colocacao = 1;

switch (colocacao) {
    case 1:
        console.log('Medalha de Ouro');
        break;

    case 2:
        console.log('Medalha de Prata');
        break;

    case 3:
        console.log('Medalha de Bronze');
        break;
    
    case 4: case 5: case 6:
        console.log('Premio de Participação');
        break;    
    
    default:
        console.log('Obrigado por participar!')
        break;
}