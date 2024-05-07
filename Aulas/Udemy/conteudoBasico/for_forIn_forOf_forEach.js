/* For padrão, simples e show de bola */

const frutas = ['Pera', 'Uva', 'Laranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
};


/* Agora a coisa fica séria */
console.log("-------------------- for in abaixo ------------------------")

/* For in, baby */
/* for in lê os indices do array ou chaves dos objects */
/* For mais simples ainda */

for (let inn in frutas) {
    console.log(frutas[inn])
}

console.log("--------------------------- for in com objects -------------------------")

let pessoa = {
    nome: "Robert",
    idade: 21, 
    hobby: "Tocar bateria"
}

/* Quando se trata de object, o for in percorre as chaves do object  */
for (let chave in pessoa){
    console.log(pessoa[chave])
}

console.log("-------------- As duas maneiras de acessar valore de um object -------------")
/* Duas maneiras para acessar os valores de um object */
console.log(pessoa.nome);
/* Ou */
/* Nesse segundo caso, eu acesso o valor de alguma chave utiliza a propria chave do valor que eu quero */
console.log(pessoa["nome"]);

console.log("---------------- for of ---------------")
/* for of */
/* Com o for of, eu consigo extrair somente o valor, sem a necessidade de colocar uma variavel com indice */

const frase = "Uaaauu, que perfume bom!"

/* essa variavel 'valor' recebe o valor de indice percorrido */
for (let valor of frase){
    console.log(valor);
}

/* Quando se trata de uma string, o for of percorre todos os indices da string e retorna cada letra da string */

/* Agora se for um array, o for of vai percorrer os indices do array, por exemplo */

for (let frut of frutas){
    console.log(frut);
}

/* for of só funciona com array e string */

console.log("------------- forEach -----------------");
/* forEach */

/* Semelhente aos outros for, mas bem mais simples */
/* dentro do forEach, devo para uma function como atributo */
/* forEach (function (valor, indice) { código } ) */
frutas.forEach(function (valorDoElement, indiceDoElement){
    console.log(`Valor do elemento: ${valorDoElement} e o indice do elemento: ${indiceDoElement}`)
})

/* forEach só funciona com array */

/* --------------------------------------------  */

// For classico - Geralmente funciona com iteraveis (array ou strings)
// For in - Retorna o indice ou chave ( strings, arrays and objects)
// For of - Retorna o valor em si ( iteraveis, arrays or strings)