/* Short-circuito ou curto-circuito */
/* 

O Curto-circuito é um comportamento dos operadores lógicos && (E) e || (OU) que permite a avaliação de expressões de forma mais eficiente. Quando esses operadores são usados, o JavaScript avalia as expressões da esquerda para a direita e pode parar a avaliação assim que o resultado final já é conhecido, sem a necessidade de avaliar todas as condições. Isso é chamado de “curto-circuito” porque a avaliação “pula” o restante das expressões.

Valores que são falsy:

false
0 (zero)
"" (string vazia)
null
undefined
NaN (Not a Number)

Por outro lado, os valores considerados TRUTHY são todos os outros valores que não são falsy. 

Isso significa que qualquer valor que não esteja na lista de falsy é automaticamente considerado truthy em um contexto booleano.

*/

/* Se o resultado for true, o js vai me retornar o ultimo valor da esquerda para direita */
/* false && true && true && true && true */
console.log( 77 && 'João' && 21 && '' && 'Robert' ) /* Basta que um valor seja falsy para que o resultado seja falsy tambem, e o js vai retornar o primeiro valor falsy (operador &&) */

/* 

Nesse caso, utilizando o operador OR, o js vai me retorna o primeiro valor true, mesmo se todos os valores forem true, o js vai retornar somente o primeiro. Caso todos os valores forem falsy, o js vai retorna o ultimo valor falsy

*/
/* false || false || true || false || false || true */
console.log( -0 || "" || 2 || false || null || 1 ) /* Basta que um valor seja truthy que o retorno seja truthy, operador ||  */

/* Another examples with AND && */
console.log("-------------------------------------------------------------")

let nome = 'Robert';

function falaOi(){
    return 'Oi'
}

console.log(nome && falaOi());


/* Another examples with OR || */

let name;

function falar_Opa(){
    return 'Opa';
}

console.log(name || falar_Opa());

/* É possivel utilizar o curto-circuito com um if, por example. */

const nome_padrao = 'pessoa tal';
const nome_do_usuario = undefined

console.log(nome_padrao || nome_do_usuario)


