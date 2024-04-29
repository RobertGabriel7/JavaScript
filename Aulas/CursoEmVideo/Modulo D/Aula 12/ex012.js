// Exercico para falar bom dia, boa tarde e boa noite

// Para pegar a hora atual se utiliza new Date()
var agoramsm = new Date()
var hora = agoramsm.getHours()

console.log(hora)

if (hora < 6){
    console.log('boa madrugada')
}else if(hora <12){
    console.log('Bom dia familia')
}else if (hora < 18){
    console.log('Boa tarde rapaziada')
}else{
    console.log('BOAA NOITEE FAMILIA')
}

// Outra maneira de fazer o mesmo código:

if (hora >= 6 && hora < 12){
    console.log('Bom dia')
}else if (hora <= 18){
    console.log('Boa tarde')
}else if(hora <= 24 ){
    console.log('Boa noite')
}else{
    console.log('Boa madrugada')
}

//switch é uma expressão e não uma condição 

var num = 7

switch (num) {
    case 1:
        console.log('teste')
        break;
    case 7:
        console.log("DEUS É MARAVILHOSO")
    break;
    
    default:
        console.log('Deus é muito bom')
        break;
}