
var opa = [1,2,7,6,4,8,2,3,4,1,2]
/* 
for (m = 0; m < opa.length; m++ ){
    console.log(`Indice ${m} e o valor: ${opa[m]}`)
}
 */


/* var indice = opa.length
opa[indice] = 123


console.log(opa)
console.log(opa.length) */

/* let numeros = [3, 17, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numeros.sort((a, b) => a - b);
console.log(numeros);
 */
console.log(opa)
var resultado = 0
for(var t = 0; t < opa.length; t++ ){

    var soma = opa[t]
    resultado = resultado + soma

}

console.log(resultado)
