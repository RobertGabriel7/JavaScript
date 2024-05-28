// Só funciona no JS e não funciona com arrow functions
// Quando não é passado um parametro para uma function, e é passado como argumentos na hora de chamada da function, esse valores são salvos por padrão no js em uma variavel que tem dentro da function e se chama "arguments"
// Por exemplo:

function funcao (){
    console.log(arguments)
    console.log(arguments[2])
}

funcao("eita", 1, 2, 3, 4, 5)

// Caso eu queria pular algum paramentro na hora de passar argumentos para uma function:

function tese(a, b = 2, c = 4){
    console.log(a + b+ c)
}

// Basta colocar undefined
tese(4, undefined, 1)
 
//--------------------------------------------------------------------------------------------
// Passa para o paramentro object desestruturado

function funcao01({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
const objet = { nome: "Robert", sobrenome: "Gabriel", idade: 20};
funcao01(objet)

// lista/array
function funcao02( [valor1, valor2, valor3] ){
    console.log(valor1, valor2, valor3)
}
const aurei = [7,7,7]
funcao02(aurei)

// ---------------------------------------------------------------------------------------------------
// rest operator = operador de resto
// Para obter o resto dos argumentos, basta colocar tres pontos no inicio da variavel, por exemplo: ...numeros
// O rest operator precisa ser o ultimo paramentro
console.log(" ---- Function Normal:")
function contaEmFunctionNormal(operador, acumulador, ...numeros){
    let resultado = acumulador;
    for (valores of numeros){
        if (operador === "+") resultado += valores;
        if (operador === "-") resultado -= valores;
        if (operador === "/") resultado /= valores;
        if (operador === "*") resultado *= valores;
    }
    console.log(operador, acumulador, numeros, resultado)
}
contaEmFunctionNormal("*", 1, 2,4,5,8,7,9,10) // Com isso, eu não preciso utilizar um array.

console.log(" ---- Function Expression ou Anonymus Function:")
const contaEmFunctionExpression = function(operador, acumulador, ...numeros){
    let resultado = acumulador;
    for (valores of numeros){
        if (operador === "+") resultado += valores;
        if (operador === "-") resultado -= valores;
        if (operador === "/") resultado /= valores;
        if (operador === "*") resultado *= valores;
    }
    console.log(operador, acumulador, numeros, resultado)
}
contaEmFunctionExpression("/", 10, 1, 7, 5, 80)

console.log(" ---- Utilizando Arrow Function:")
contaEmFunctionExpression("+", 1, 7, 8, 10, 22, 45)

const contaEmArrowFunction = (operador, acumulador, ...numeros) => {
    let resultado = acumulador;
    for (valores of numeros){
        if (operador === "+") resultado += valores;
        if (operador === "-") resultado -= valores;
        if (operador === "/") resultado /= valores;
        if (operador === "*") resultado *= valores;
    }
    console.log(operador, acumulador, numeros, resultado)
};

contaEmArrowFunction("*", 2, 10, 15, 20, 25, 77)

// Dica: é mais indicado utilizar o ...rest operador para pegar todos os argumentos passados na chamada da funcrion