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
console.log("----------------------------------------------------------------")
/* atribuindo via desestruturacao com Objects */

const pessoa = {
    /* nome: 'Robert', */
    sobrenome: 'Gabriel',
    idade: 21,

    endereco: {
        rua: 'Benfica',
        numero: 629
    }
}

console.log(pessoa.nome)

// Atribuição via desestruturação 
const { nome, sobrenome, idade } = pessoa
console.log(nome, sobrenome, idade)

const { nome: nomE = 'opa' } = pessoa
console.log(nome1)

/* Para atribuir o valor de uma variavel dentro do object em outra variavel */
// const { nome: name1, idade: yearOld  } = pessoa
// console.log(name1, yearOld)



const info_para_contato = {
    
    telefone: "(11) 98115-5590",
    email: "robertgff7@gmail.com"
    
}
