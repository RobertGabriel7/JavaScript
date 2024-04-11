/* Uma array é uma variavel composta, que tem varios elementos e esses elementos são compostos por seus valores e por uma chave de identificação. */

/* Para declarar uma variavel composta */

let num = [5,2,8]

/* Para adicionar um elemento na posição que vc quer */
num[3] = 7

/* para adicionar um elemento na ultima posição */
num.push(10)

/* Para saber a quantidade de elementos do array */
num.length 
console.log(num.length) 

/* Vai colocar dos os valores dos elementos na ordem crescente */
num.sort()

console.log(num)


/* Para buscar valores dentro de um array */
/* Ela vai retornar o indice do valor a ser procurado, caso não tenha o valor, vai retornar -1 */
/* array.indexOf(valor para ser procurado) */   
let verificao = num.indexOf(77)
if(verificao == -1){
    console.log("Valor não encontrado.")
}else{{
    console.log(num.indexOf(7))
}}









console.log("Utilizando a estrutura de repetição WHILE")
var numeros = 0
while(numeros < num.length){
    console.log(`Indice do elemento: ${numeros}, e o valor: ${num[numeros]}`)

    numeros++
}

/* Utilizando o FOR  */
console.log("Utilizando a estrutura de repetição FOR")
for (let number = 0; number < num.length; number++){
    console.log(`Indice do elemento: ${number}, e o valor: ${num[number]}`)
}


/* Esse FOR é utilizado para variaveis compostas no Javascript: FORIN */
/* Um FOR muito mais simplificado para utilizar-lo com array */
console.log("FORIN")
/* Para cada posição (numeros) no array(num), ele vai percorrer automaticamente até a uktina posição. */
for (numeros in num){
    console.log(`Indice do elemento: ${numeros}, e o valor: ${num[numeros]}`)
}

