
/* Aqui vai me retornar uma nodeList ( object )*/
const ps = document.querySelectorAll('p'); 


/* Para pegar os estilos do body */
/* utilizar a function getComputedStyle( selencionar o elemento ). e pegar o valor desse elemento */

const corDoBody = getComputedStyle(document.body).backgroundColor;
const corDaFonte = getComputedStyle(document.body).color;

/* Aqui estou percorrendo os valores do object ps */
for (let valores of ps) {
    /* Aqui estou estilizando o a tag p */
    valores.style.backgroundColor = corDoBody;
    valores.style.color = corDaFonte;
    valores.style.padding = "25px"
    valores.style.borderRadius = "10px"

}

/* Essa maneira não funciona pq o ps é um nodeList e funciona com array e o array não tem a propriedade style. */
/* 

ps.style.backgroundColor = corDoBody 

Só iria funcionar se fosse assim:

ps[0].style.backgroundColor = corDoBody

*/