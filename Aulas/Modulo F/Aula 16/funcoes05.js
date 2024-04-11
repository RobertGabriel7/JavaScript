/* Fatorial de um numero funciona assim:

5! = 5 x 4 x 3 x 2 x 1

*/
function fatorial(nu2) {
    // Inicializamos a variável 'fat' com o valor 1.
    let fat = 1;

    // Iniciamos um loop 'for' que começa com o valor de 'nu2'.
    // O loop continuará enquanto 'm' for maior que 1.
    for (let m = nu2; m > 1; m--) {
        // Multiplicamos o valor atual de 'fat' pelo valor atual de 'm'
        // e atribuímos o resultado de volta à variável 'fat'.
        fat *= m;
    }

    // Retornamos o valor de 'fat' como o resultado do fatorial.
    return fat;
}

// Chamamos a função 'fatorial' com o argumento 5 e imprimimos o resultado no console.
console.log(fatorial(5)); // O resultado será 120.


/* Exemplo de RECURSIVIDADE */
/* É possivel chamar uma function dentro de outra function */

function fatorial(n){
    if(n == 1){
        return 1
    }   else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))












