/*

O desafio é criar uma função que receba uma lista(array) como entrada e retorne sempre True (Verdadeiro) para cada item na lista. No entanto, se um elemento da lista for a palavra 'flick', a função deve alternar e retornar sempre o valor booleano oposto (False/Falseiro).

*/

function flickSwitch(arr){
    let aurei = []
    let verificador = 0
    /* Esse for verifica se tem o flick e armazena o resultado no array aurei*/
    for(var m = 0; m < arr.length; m++){

        if(arr[m] != 'flick'){
            aurei[m] = true 
        }else{
            aurei[m] = false
        }
    }
    console.log(aurei + ' first')
        /* Esse for vai torna dos os resultados false depois do primeiro false */
        for(let v= 0; v < arr.length; v++){
            if(aurei[v] == false ){
                aurei[v] = false
                verificador = 1 /* Variavel para a verificação */
            }else if(verificador == 1 ){
                aurei[v] = false
            }else{
                aurei[v] = true
            }
        }
    
    return console.log(aurei)
}
let teste = ["codewars", "flick", "code", "wars"]

let teste2 = ['flick', 'chocolate', 'adventure', 'sunshine'] /*  [False, False, False, False] */

let teste3 = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick']  /* [True, True, False, False, True] */

flickSwitch(teste)


/* Explicação do código: 

Criei a primeira function para verificar se dentro da array 'teste' que foi passado para a variavel 'arr' como parametro tinha a palavra 'flick', se tivesse, o array receberia false, se não, true e o indice para armazenar esse resultado é com base no primeiro for.

Depois do primeiro for, todos os resultados foram salvos no array 'aurei' para a segunda verificação.

Já o segundo for, ele verifica se dentro do array 'aurei' tem algum valor igual a false, se tiver, a variavel 'verificador' vai receber 1 como valor e se essa variavel receber esse valor eu sei que foi o primeiro false e os valores dos proximos elementos precisam ser false, pois esse é o objetivo do desafio. 

Basicamente é isso, graças a Deus, consegui!!!!!

*/