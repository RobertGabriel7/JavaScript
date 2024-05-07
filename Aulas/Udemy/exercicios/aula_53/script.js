function criarElements() {

    /* a variavel container é o elementoPai */
    var container = document.querySelector("#container");

    /* A variavel dive será o elemento filho, e partir disso,  a 'div' que será o elemento dentro do elementoPai. */
    var dive = document.createElement('div');

    /* Array com object */
    const elementos =

        [
            { tag: 'p', texto: 'Frase 1' }, /* indice 0 */
            { tag: 'div', texto: 'Frase 2' }, /* indice 1 */
            { tag: 'footer', texto: 'Frase 3' }, /* indice 2 */
            { tag: 'section', texto: 'Frase 4' } /* indice 3 */

        ]

    // var dive = document.querySelector('#dive')

    /* Para acessar o array e acessar um valor especifico do object 
    
        console.log(elementos[0].tag)
    
    */
    console.log(elementos[0].tag);

    /* Para criar um elemento do HTML, porém eu preciso dizer onde vai ser criado este elemento. */
    //   const div = document.createElement('div');


    let valores = elementos[0].tag + elementos[0].texto
    const { tag, texto } = elementos[0]

    console.log(valores)
    for (var i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);

        /* Aqui estou extraindo os valores da tag e texto */
        let { tag, texto } = elementos[i];
        console.log(tag);

        /* Como estou utilizando o for acessar dos os valores do array, eu estou também criando elementos html para colocar textos. */
        /* Aqui está criando as tags */
        let tags = document.createElement(tag);

        /* Para colocar texto na tag que foi criada */
        /* Aqui, depois que as tags foram criadas, elas recebem um texto que inserido com innerHTML  */
        tags.innerText = texto;
        /* Para criar textos */
        let tagCriada = document.createTextNode(texto)
        /* Aqui, por fim, vão sendo criadas dentro da tag divePai (que é uma div no html) */
        dive.appendChild(tags)
    }

    /* Aqui o elemento filho(dive) é criado dentro do elementoPai '(container) */
    container.appendChild(dive);
}

