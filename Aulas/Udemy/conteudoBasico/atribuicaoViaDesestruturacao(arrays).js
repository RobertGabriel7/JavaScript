/* 

A atribuição via desestruturação é uma expressão em JavaScript que permite extrair dados de arrays ou objetos e atribuí-los a variáveis distintas.

*/

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A


let letras = [b, c, a];
/* desestruturacao */
[a, b, c ] = letras;

console.log(a, b, c)

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

/* Aqui estou atribuindo os valores do array 'numeros' para as variaveis 'primeiroNumero' que recebe o valor do primero indice, 'segundoNumero' que recebe o valor do segundo indice, e a variavel (vira um array) resto recebe os valores de todos os outros indices.*/
let [primeiroNumero, segundoNumero, ...resto]  = numeros

/* Aqui eu estou pegando diferentes valores de indices diferentes */
let [um, , tres, , cinco, , sete, , nove] = numeros

console.log(resto[4])

console.log(um, tres, sete, nove)


/* 

    …rest: O operador rest é usado para agrupar elementos restantes de um array ou parâmetros de uma função em um único array.

    …spread: O operador spread é usado para “espalhar” os elementos de um array ou objeto em elementos individuais. Isso é útil quando você está passando elementos de um array para uma função como argumentos separados ou combinando arrays.

*/

/* atribuição via desestruturacao em arrays */
//                                   0            1           2
//                               0  1  3    0  1  2   0  1  2
const numberss = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [ lista1, lista2, lista3 ] = numberss;

console.log(lista3[0])

