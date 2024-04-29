/* 

Difference between null and undefined (indefinido):

Em JavaScript, quando você declara uma variável sem atribuir um valor a ela, ela é automaticamente inicializada com o valor undefined. Isso indica que a variável foi criada, mas ainda não foi definida com um valor específico.

Por outro lado, null é um valor que deve ser atribuído explicitamente à variável pelo programador. Isso é feito quando você quer estabelecer que a variável existe, mas intencionalmente não possui nenhum valor ou objeto associado a ela no momento. 

*/

/* Exemplo prático */

let minhaVariavel; // Declarada, mas não definida, portanto é 'undefined'
console.log(minhaVariavel); // Saída: undefined

minhaVariavel = null; // Definida explicitamente como 'null' pelo programador
console.log(minhaVariavel); // Saída: null

/* 

NaN (Not-a-Number): é um valor especial que ocorre quando uma operação matemática ou uma função tenta realizar uma operação que não resulta em um número válido.

Situações comuns em que o NaN pode ocorrer:

Divisão de zero por zero (0/0).
Multiplicação de infinito por zero (Infinity * 0).
Conversão de uma string que não representa um número para um número (parseInt("texto")).
Operações matemáticas onde o resultado não é definido (Math.sqrt(-1)).

*/

/* Exemplo prático */

console.log(0/0); // NaN
console.log(parseInt("não é um número")); // NaN
console.log(Math.sqrt(-1)); // NaN

// Verificando NaN
console.log(Number.isNaN(0/0)); // true
