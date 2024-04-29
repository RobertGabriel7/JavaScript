/* Operador ternario é simplesmente um ? e : */
/* (condição) ? 'Valor verdadeiro' : 'Valor falso'; */
/* Serve para simplicar o if else */

/* Exemplo usando if else */
const pontuacaoDoUsuario = 999

if (pontuacaoDoUsuario >= 1000){
    console.log('Usuario VIP');
}else{
    console.log('Usuario normal');
}

/* Utilizando operador ternario */

const pontuacao_do_usuario = 1200
/* a vatiavel nivelDoUsuario recebe a operação ternaria */
/* pontuacao_do_usuario é maior ou igual 1000 ? Se sim, o código roda o que tiver depois da ? (exclamação), se não : ( : = else ) o código roda o que tiver depois dos dois pontos : */
const nivelDoUsuario = pontuacao_do_usuario >= 1000 ? 'Usuario VIP MAX' : 'Usuario normal';

console.log(nivelDoUsuario)