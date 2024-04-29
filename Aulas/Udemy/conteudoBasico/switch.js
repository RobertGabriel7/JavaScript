/* Estrutura de repetição */


let fruta = 'maçã';

switch (fruta) {
    case 'banana':
        console.log('Eu gosto de bananas!');
        break;
    case 'maçã':
        console.log('Maçãs são deliciosas!');
        break;
    default:
        console.log('Eu gosto de todas as frutas!');
}

/* Nesse caso, utiliza um function, o return assume o papel do break. */
function qualFruta(frutaEscolhida) {
    switch (frutaEscolhida) {
        case 'banana':
            return console.log('Eu gosto de bananas!');
        case 'maçã':
            return console.log('Maçãs são deliciosas!');
        default:
            return console.log('Eu gosto de todas as frutas!');
    }
}
/* vai retornar case 'banana' e undefined porque a propria function vai retornar um console,log, sendo necessario só chamar a function. Quando, por exemplo, eu tento chamar essa function dentro de um console,log, acontece que a function é chamada normal mas o console.log chama a function e retorna undefined */
console.log(qualFruta('banana'))

console.log(console.log('opa'))