

let umaString = "Um Texto "


/* Para pegar o valor do indice [5] */
console.log(umaString[5]) 
/* ou */
console.log(umaString.charAt(4))


/* Para saber em qual indice uma palavra está */
console.log(umaString.indexOf("Um")) 
console.log(umaString.indexOf("Um", 2)) /* Começa a partir de um indice */
console.log(umaString.lastIndexOf("Texto")) /* Começa da direita para esquerda */

/* Para substituir uma string por outra */
/* Primeiro precisa digitar uma palavra que tem na string e depois a nova palavra */
console.log(umaString.replace("Um", "Umm"))

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())

console.log(umaString)


