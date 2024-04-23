let contador = 1
/* Valor da variavel foi pós-incrementado (no final da variavel): contador = contador + 1 ou contador++ */
contador++
console.log(contador)

/* Exemplo para utilizar o pré e pós incremento */

let opa = 1
/* Nesse com o pós-incremento, o codigo vai realizar o console.log, ou seja, vai mostrar o valor atual da variavel e depois que mostrar, ele vai realizar a incrementação. */
/* Então o valor vai será 1 e não 2 pq é póse não pré. */
console.log(`Pós-incremento: ${opa++}`)
/* Agora com mais um console.log vai mostrar o resultado real da variavel depois da incrementação */
console.log(`Pós-incrementado depois da atribuição do valor (++): ${opa}`)

let vish = 1
/* Agora, nesse caso, primeiro o código vai fazer a incrementação e depois vai mostrar na tela */
console.log(`Pré-incremento: ${++vish}`)

/* O recomentado é melhor fazer a incrementação de depois mostrar o resultado. */

/* 

incremento = ++
Decremento = -- 

*/

/* Outra maneira de incrementação, operadores de atribuição */

const passo = 50;
let nu = 5

/* Ou seja, nu = nu + passo  */
nu += passo
nu *= passo
nu **= passo

/* NaN = Not a Number */

