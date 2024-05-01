// Array dentro de outro array
//                                   0            1           2
//                               0  1  3    0  1  2   0  1  2
const numberss = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

let aurei = ['Lucas', 'Julia', 'Joao', 'Maria']

/* Para adicionar valores no ultimo indice */
aurei[aurei.length] = 'Robert'
/* Ou */
aurei.push('Gabriel')

/* Para adicionar no começo */
aurei.unshift('Marcos')

/* Para remover o ultimo elemento do array  */
/* pop = estourar */
const alunoRemovido = aurei.pop()
/* Para remover o promeiro elemento:
alunoRemovido = aurei.shift()
*/
console.log(alunoRemovido)

delete aurei[2] /* Remove o elemento mas mantem os indices dos outros elementos. */

/* Para fazer o afiamento do array, semelhamente as strings: onde começa e onde termina */
console.log(aurei.slice(0, 3))

console.log(aurei)