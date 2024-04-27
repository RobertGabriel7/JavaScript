/* addEventListener('submit) 
 
Para o verificador/ouvinte, capturar eventos submit, precisa selecionar o formulario, não pode ser outro elemento porque somente o formulario que dispara os eventos "submits". 
 
*/
/* Importantissimo: object event No seu código, event.preventDefault(); é usado para prevenir o comportamento padrão do evento de submit, que é enviar os dados do formulário para o servidor ou para o arquivo especificado no atributo action do formulário. Ao chamar preventDefault(), você impede que o formulário seja enviado, permitindo que você faça outra coisa com os dados, como processá-los com JavaScript ou enviar via AJAX.

 
*/


function meuEscopo() {

    /* Aqui, estou criando uma variavel botao que é identificada pelo form (formulario no html) e tambem estou adicionando um ouvinte de eventos que ficará resposanvel por verificar se submit for acionado. Caso sim, o ouvinte vai chamar a function recebendoDados */
    let botao = window.document.querySelector('form').addEventListener('submit', recebendoDados)
    /* Então, quando a function recebendoDados for chamada, ela impedirá que os eventos padrões do html/javascript não aconteçam */
    function recebendoDados(event) {
        /* Para não permiti os eventos que são padrão do html/js serem executados */
        event.preventDefault();

    }

}
meuEscopo();


/* Cometarios complementares */

/*
 
Estou selecionando um elemento atraves do seu id, ao mesmo tempo (utilizando o ponto), estou colocando um verificador de eventos (addEventListener) para verificar se quando for enviando alguma coisa, o verificador chame a function recebendoEvent.
 
Essa function eu crirei para que os eventos padrões do html/javascript não sejam inicializados. 
 
*/
/*     
        let botao = window.document.querySelector('form').addEventListener('submit', recebendoEvent)
        Essa function recebe 'event' como parametro 
        function recebendoEvent(event) {
    
            event.preventDefault();
            window.alert('opaa')
    
        }
    

*/