/* Função anonima */

const raiz = function (n){
    return n ** 0.5
};

console.log(raiz(20).toFixed(2))

/* Arrow (seta) function */
/* Uma maneira moderna de escrever a função anonima */

const soma = (x = 1, y = 1) => {
    return x + y
}

/* Ou */

const soma1 = (x = 1, y = 1) =>  x + y;

console.log(soma(20, 20))
console.log(soma1(10, 10))
