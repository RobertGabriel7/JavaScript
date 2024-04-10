function carregar(){
// Carregando informações da Class Date()
var horario = new Date()
//Obtendo a hora
var hora = horario.getHours()
//Obtendo os minutos
var minutos = horario.getMinutes()
// Selecionando um elemento pelo id para modificar o seu conteudo
var secao = window.document.getElementById("secao1")
var dive01 = window.document.getElementById("dive1")
var dive02 = window.document.getElementById("dive2")
var bcorpo = window.document.getElementById("corpo")
var fimg = window.document.getElementById("img1")
//Modificando esse conteudo com innerHTML

 /* var hora = 11 */

dive01.innerHTML = `Agora é ${hora}h${minutos}.`



if (hora < 12){ //Horario da manhã

    dive02.innerHTML = "Bom dia meu polvo."
    bcorpo.style.backgroundColor = "#313b72"
    bcorpo.style.backgroundImage = "url('../Recursos/pexels-pixabay-163323.jpg')"
    secao.style.backgroundColor = "rgba(0,0,0,0.1)"
    fimg.src = "../Recursos/pexels-pixabay-163323.jpg"
    secao.style.color = "white"
    

}else if(hora < 18){ //Horario da tarde'

    dive02.innerHTML = "Boa tarde familia."
    //Para modificar a estilização de algum elemento por id com JavaScript
    bcorpo.style.backgroundColor = "orange"
    bcorpo.style.backgroundImage = "url('../Recursos/pexels-marko-obrvan-306344.jpg')"
    //Para mudar a img com JavaScript
    fimg.src = "../Recursos/pexels-marko-obrvan-306344.jpg"
    secao.style.backgroundColor = "rgba(0,0,0,0.1)"
    secao.style.color = "white"

} else{ //Horario de noite

    //Mensagem
    dive02.innerHTML = "Boa noite rapaziada, povo de Deus!"
    // Estilo da section
    secao.style.backgroundColor = "rgba(0,0,0,0.3)"
    // Estilo do body
    bcorpo.style.backgroundImage = "url('../Recursos/pexels-nicolas-postiglioni-421129.jpg')" 
    // Estilo da cor do body
    bcorpo.style.backgroundColor = "#2C133C"
    // Mpdificando a imagem da tag img
    fimg.src = "../Recursos/pexels-nicolas-postiglioni-421129.jpg"
    // texto na cor branca
    secao.style.color = "white"  
}
}