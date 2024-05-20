/* Se o resultado for diferente de zero, o primeiro numero não divisivel pelo o segundo numero 

Ou seja, para um numero ser divisivel por outro, o resultado precisas ser igual a zero.
*/

/* Instruções */

// Se numero for divisivel por 3 = Fizz
// Se numero for divisivel por 5 = Buzz
// Se numero fot divisivel por 3 e 5 = FizzBuzz
// Se o numero não for divisivel por 3 e 5 = retorna o numero

/* Para percorrer de 1 a 100 */
for (let n = 1; n <= 100; n++){
    var numero = n
    function fizzBuzz(nu1){
       /*  console.log(nu1) */
        if(isNaN(nu1)){
            console.log("Não é um numero.")        
        }else{
            // console.log(`${nu1} é um numero.`)
            
            /* Verifica se o numero é divisivel por 3 e 5 para continuar com as outras verificações */
            if (nu1 % 3 == 0 || nu1 % 5 == 0){
                
                /* Aqui verfica se o numero é divisivel tanto 3 quanto por 5.*/
                if(nu1 % 3 == 0 && nu1 % 5 == 0){
                    return "FizzBuzz"

                /* Se o numero não for divisivel por 3 e 5, aqui verifica se é divisivel por 5. */
                }else if(nu1 % 5 == 0){
                    return "Buzz"

                /* Se não for divisivel por 5, aqui verifica se é divisivel por 3 */
                }else if(nu1 % 3 == 0) {
                    return "Fizz"
                }

            /* Acaso o numero não for divisivel por 3 e 5, vai retornar essa mensagem */
            }else{
                return nu1
            }
        }
    } 
    console.log(fizzBuzz(numero))
}

/* Outra maneira de fazer o código acima */

function fizzBuzz1(numerinho){

    if (typeof numero !== "number") return numerinho;
    if (numerinho % 3 === 0 && numerinho % 5 === 0) return "FizzBuzz";
    if (numerinho % 3 == 0) return "Fizz";
    if (numerinho % 5 == 0) return "Buzz";
    /* Se nenhuma dessas condições forem atendidas, será retornado o numero */
    return numerinho

}