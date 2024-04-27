/* Para não poluir o escopo global e para ter uma organização melhor, eu criei essa function meuEscopo(). */
function meuEscopo() {
    
    /* Declarando a variavel e selecionado o elemento 'form' */
    const formm = window.document.querySelector('form')
    
    /* Adicionado um ouvinte de eventos e chamando a function "recebendoDados" quando o evento acontecer. */
    formm.addEventListener('submit', recebendoDados)
    
    let indice = 0
    let pessoas = []
    function recebendoDados(event) {
        /* Vai parar os eventos padrões */
        event.preventDefault()

        /* Eu coloquei essas variaveis aqui dentro pq a function "meuEscopo()" já inicia quando acesso o site. Então seu eu colocar as variaveis dentro da function meuEscopo(), elas vão pegar valores que estiverem nos inputs, porém vai NaN. Com isso, é melhor coloca-las dentro da function que utilizará elas. */
        let nome = document.querySelector('#nome').value
        let idade = window.document.querySelector('input#idade').value
        let hobby = window.document.querySelector('input#hobby').value
        let information1 = window.document.querySelector('#information1')
        /* Vai colocar um ouvinte de ação para o form */
    
        /* Objeto para armazenar os dados que foram enviados para os inputs */
        const objetoPessoas = {
            nome: nome,
            idade: idade,
            hobby: hobby
        }

        pessoas[indice] = objetoPessoas
        information1.innerHTML += `O seu nome é ${objetoPessoas.nome}, você tem ${objetoPessoas.idade} e o seu hobby é: ${objetoPessoas.hobby}.<br>`
        
        console.log(pessoas)
        indice++


    };
    /* Exercio concluido graças a Deus! */
}
meuEscopo();

/* Comentarios */

/* Para mostrar o array com todas as informatções, é so colocar o nome do array, não precisa colocar o indice */

/* window.alert()
 
a função alert() do JavaScript só aceita um único argumento. Quando você passa vários argumentos separados por vírgula, somente o primeiro argumento é considerado, e os demais são ignorados.
 
Por exemplo:

window.alert(nome, idade, hobby)

*/

/* Alternativa

    Ao inves de eu usar uma variavel que vai recebendo valor a cada submit e utiliza´la como indice, eu posso fazer isso (o mais indicado):

          pessoas.push({
            nome: nome,
            idade: idade,
            hobby: hobby
        })  

        Dessa maneira, os valores são adicionados no ultimo indice do array pessoas, sendo assim, uma melhor maneira para adicionar um valor ao ultimo indice.
*/