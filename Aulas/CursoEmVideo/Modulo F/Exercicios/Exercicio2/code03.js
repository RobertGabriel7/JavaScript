/* 
1. **Verificar o array fornecido (`x`):** A primeira coisa que você precisa fazer é verificar o array fornecido para encontrar ideias boas ('good') e ideias ruins ('bad').

2. **Contar o número de ideias boas:** Você precisa contar quantas ideias boas estão no array.

3. **Decidir o que retornar com base no número de ideias boas:** Com base no número de ideias boas encontradas no array, você deve retornar uma determinada mensagem:
   - Se houver uma ou duas ideias boas, retorne 'Publish!'.
   - Se houver mais de duas ideias boas, retorne 'I smell a series!'.
   - Se não houver nenhuma ideia boa, retorne 'Fail!'.

Portanto, o desafio é criar uma função que analise o array fornecido, conte o número de ideias boas e, em seguida, retorne a mensagem apropriada com base nesse número.

*/


/* Array com as palavras*/

var x = ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']

/* Funcao para verificar as palavras */

function well(palavras){
    
    var quantidadedeGood = 0
    var quantidadedeBad = 0

    /* Parte do código resposavel pela contagem de caracteres iguais */
    for (var m = 0; m < palavras.length; m++ ){
        if (palavras[m] === 'good'){
            quantidadedeGood++
        }else if(palavras[m] === 'bad' ){
            quantidadedeBad++
        }else{
            console.log("Erro")
        }
    }
    /* Parte do código resposavel para decisão das ideias */
    if (quantidadedeGood < 1){
        return 'Fail!'
    }else if (quantidadedeGood >= 1 && quantidadedeGood <= 2 ){
        return 'Publish!'
    }else {
        return 'I smell a series!'
    }
}

/* Teste */

var quantidadedeGood = 0
var quantidadedeBad = 0


for (var m = 0; m < palavras.length; m++ ){
    

    if (palavras[m] === 'good'){
        quantidadedeGood++

    }else if(palavras[m] === 'bad' ){
        quantidadedeBad++
        
    }else{
        console.log("Erro")
    }
}

console.log(`Quantidade de palavras Good: ${quantidadedeGood}`)

console.log(`Quantidade de palavras bad: ${quantidadedeBad}`)

if (quantidadedeGood < 1){
    return 'Fail!'
}else if (quantidadedeGood >= 1 && quantidadedeGood <= 2 ){
    return 'Publish!'
}else {
    return 'I smell a series!'
}

/* GRAÇAS A DEUS, consegui resolver esse desafio (url: "https://www.codewars.com/kata/57f222ce69e09c3630000212") sem o chatgpt */