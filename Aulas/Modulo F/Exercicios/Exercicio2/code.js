/* Desafio do codewrs */

function smash(palavras){
    // Verifica se o array de palavras está vazio
    if (palavras.length === 0) {
        return ''; // Retorna uma string vazia se o array estiver vazio
    } 
    // Verifica se há apenas uma palavra no array
    else if (palavras.length === 1) {
        return palavras[0]; // Retorna a única palavra se houver apenas uma no array
    } 
    // Caso contrário, constrói a frase concatenando as palavras com espaços entre elas
    else {
        var frase = '';
        for (var m = 0; m < palavras.length; m++){
            frase += `${palavras[m]} `;
        }    
        return frase.trim(); // Remove espaços extras no início e no final da frase
    }
}

var words = ['hello', 'world', 'this', 'is', 'great'];
console.log(smash(words));