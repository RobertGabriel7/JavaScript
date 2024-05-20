// Operadores Aritméticos
let a = 10;
let b = 5;

console.log("Adição: " + (a + b));           // Adiciona a e b, resultado: 15
console.log("Subtração: " + (a - b));        // Subtrai b de a, resultado: 5
console.log("Multiplicação: " + (a * b));    // Multiplica a por b, resultado: 50
console.log("Divisão: " + (a / b));          // Divide a por b, resultado: 2
console.log("Módulo: " + (a % b));           // Resto da divisão de a por b, resultado: 0 // Um numero é consideravel divisvei quando ele não tem resto, só pode ser um numero inteiro

// Operadores de Incremento e Decremento
let c = 1;
console.log("Incremento: " + (++c)); // Incrementa c em 1 antes de usar, resultado: 2
console.log("Decremento: " + (--c)); // Decrementa c em 1 antes de usar, resultado: 1

// Operadores de Comparação
console.log("Igual a: " + (a == b));         // Compara se a é igual a b, resultado: false
console.log("Idêntico a: " + (a === b));     // Compara se a é estritamente igual a b (tipo e valor), resultado: false
console.log("Diferente de: " + (a != b));    // Compara se a é diferente de b, resultado: true
console.log("Não idêntico a: " + (a !== b)); // Compara se a é estritamente diferente de b (tipo ou valor), resultado: true
console.log("Maior que: " + (a > b));        // Compara se a é maior que b, resultado: true
console.log("Menor que: " + (a < b));        // Compara se a é menor que b, resultado: false
console.log("Maior ou igual a: " + (a >= b));// Compara se a é maior ou igual a b, resultado: true
console.log("Menor ou igual a: " + (a <= b));// Compara se a é menor ou igual a b, resultado: false

// Operadores Lógicos
let x = true;
let y = false;

console.log("AND lógico: " + (x && y));  // Retorna true se ambos x e y são true, caso contrário false, resultado: false
console.log("OR lógico: " + (x || y));   // Retorna true se pelo menos um entre x ou y é true, resultado: true
console.log("NOT lógico: " + (!x));      // Inverte o valor de x, se x é true, !x é false, resultado: false

// Operador Ternário
let idade = 18;
let podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
// Se a condição (idade >= 18) for true, retorna "Pode votar", caso contrário "Não pode votar"
console.log(podeVotar); // Pode votar
