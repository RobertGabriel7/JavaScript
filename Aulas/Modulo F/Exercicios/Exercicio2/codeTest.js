
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

console.log(well(x))