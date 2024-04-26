/* 'return' de functions

As funções não necessariamente precisam de parametro e quando for colocada alguma variavel como parametro, não precisa também de 'return'  

*/

/*  Variaveis dentro de um escopo

As variaveis que estão dentro de uma function não sofrem alteração por algo externo a function, somente se for algo interno. 

Por exemplo:
Uma variavel dentro da function, ela está protegida por essa function e não reconhecida no escope global, sendo assim, ela não pode ser modifica a não ser se for dentro da function que ela está.

*/

/* QuerySelector

O QuerySelector seleciona os elementos em html por qualquer caracteristica desses elementos, por exemplo, pode ser po id, class, tag """etc..."""

*/

/* Função anonima */

const raiz = function (n){
    return n ** 0.5
};

console.log(raiz(20).toFixed(2))

/* Arrow (seta) function */
/* Uma maneira moderna de escrever a função anonima */

const soma = (x = 1, y = 1) => {
    return x + y
}

/* Ou */

const soma1 = (x = 1, y = 1) =>  x + y;

console.log(soma(20, 20))
console.log(soma1(10, 10))

/* document.addEventListener()

addEventListener() nada mais é que um espião que fica dentro da pagina para ficar vigiando alguma coisa, ou seja, é um método que verifica qualquer ação realizada dentro do site.

*/

/* Selencionando o elemento form para colocar o espião: addEventListener */
let form = document.querySelector('form')

/* Seleciono a variavel para capturar o evento de onsubmit (quando eu click em um botão submit = significa enviar) */
form.onsubmit = function(evento){
    
    /* preventDefault() 

    Previne os eventos que são realizados por padrão, ou seja, A função preventDefault() é usada para evitar o comportamento padrão de um evento em JavaScript. Ela é comumente usada em situações onde você precisa interceptar um evento, como o envio de um formulário, e realizar alguma ação personalizada antes que o comportamento padrão ocorra.
    
    */
    evento.preventDefault();
};


