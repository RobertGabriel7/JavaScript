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
console.log( -0 && 'João' && 21 && 77 && 'Robert' ) /* Basta que um valor seja falsy para que o resultado seja falsy tambem, operador && */

/* 

Nesse caso, utilizando o operador OR, o js vai me retorna o primeiro valor true, mesmo se todos os valores forem true, o js vai retornar somente o primeiro. Caso todos os valores forem falsy, o js vai retorna o ultimo valor falsy

*/
/* false || false || true || false || false || true */
console.log( -0 || "" || 2 || false || null || 1 ) /* Basta que um valor seja truthy que o retorno seja truthy, operador ||  */
