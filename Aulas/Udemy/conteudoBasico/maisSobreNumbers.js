let num = 7
let num2 = 21.231541505132
let teste = num * 'opaa'

/* Colocando o toString(2) com o número 2 retorna o numero em binario */
console.log(num.toString(2))

/* Para fixar as casas decimais */
console.log(num2.toFixed(2))

/* Para verificar se um número é inteiro */
/* Ele retorna true ou false */
console.log(Number.isInteger(num))

/* Para saber se é um NaN */
/* Ele retorna true ou false */
console.log(Number.isNaN(teste))

// Padrão de contas do JavaScript: IEEE 754-2008

/* 

Quando uma função está dentro de um objeto, ela se chama "método".

*/

/* Method Math */

/* Para encontrar o maior numero */

console.log(Math.max(num))

/* O menor */

console.log(Math.min(num))

/* Números aleatorios */

console.log(Math.random(1, 20))
