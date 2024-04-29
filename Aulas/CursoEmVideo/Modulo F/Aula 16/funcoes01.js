/* 

Uma function tem:
chamadas, 
parâmetros, 
ação e 
retorno.
Nem todas tem essas etapas

Ações: são executadas assim que são chamadas ou em decorrência de algum evento.
*/

/* function parOuimpar (a variavel é o PARÂMETRO ) */
function parOuImpar(num){

    /* if é a AÇÃO */
    if(num %2==0){
   
        /* Para saber se um numero é par ou impar, o resto da divisão por inteiro precisa ser igual a 0 para ser um número par */ 

        /* RETORNO da ação */
        return "- PAR" /* Essa função vai retornar alguma coisa, por isso precisa de um return */

    }else{
        /* RETORNO da ação */
        return "- IMPAR" 

    }

}

/* Ação para chamar a function 

parOuimpar(7) // chamar a function e passar algum valor porque precisa para algum parâmentro (valor)  

*/

/* Quando é passado um valor para function, como no exemplo abaixo, isso é a CHAMADA */
var resultado = parOuImpar(7)


console.log(resultado)
/* ou */
console.log(parOuImpar(629))