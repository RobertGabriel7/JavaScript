/* 

Primitivos (Imutaveis) - String, number, boolean, undefined, null (bigint, symbol): Todos os valores primitivos são COPIADOS.
Referência (Mutaveis) - Array, object, function: Todos os valores que são passados por referência PARTINHAM do mesmo espaço da memória, então os valores não são copiados.

*/

let a = 'camaro'
let b = a /* Aconteceu uma cópia da variavel a para a variavel b */

a = 'CAMARO ZL1'

console.log(a, b)

/* Então, quando os valores das variaveis são primitivos, eles são copiados e não são mutaveis */

/* E os valores por referência são passados por referência, e são mutaveis  */

/* Exemplo por referência */

let opa = [1, 2, 3]

let eita = opa

console.log(opa, eita)

/* 

Nesse caso acima, como os valores são passados por referência, a variavel eita que está recebendo a variavel opa, e ela passa os valores por referência. Com isso, quando alguma variavel muda algum valor do array, as duas variaveis sofrem essa mudança já que a variavel eita referência o mesmo o valor de opa na mémoria. Então, as duas variaveis partilham do mesmo espaço na memória do computador.

*/

/* 
Mas é possivel copiar os valores que são passados por referência, por exemplo:
*/

let d = [1, 2, 3]
let e = [...d] /* Assim que é feita uma cópia dos valores de um array, ou seja, é copiado os valores que são passados por referência. */

/* O mesmo exemplo, mas utilizando object  */

const w = {

    nome: 'Robert',
    sobrenome: 'Gabriel',
    idade: 21
}

/* Aqui é feito a cópia do object */
let ylo = {...w}

w.nome = 'Robertin'

console.log(w, ylo)