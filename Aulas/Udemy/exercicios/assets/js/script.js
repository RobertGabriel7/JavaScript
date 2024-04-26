
function calculo(event) {

    event.preventDefault();

    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let information1 = document.getElementById('information1')

    let soma = peso / (altura * altura)
    let imc = soma.toFixed(2)

    function classificacao(n1) {
        if (imc <= 18.5) {
            return 'Abaixo do peso'
        } else if (imc <= 24.9) {
            return 'Peso normal'
        } else if (imc <= 29.9) {
            return 'Sobrepeso'
        } else if (imc <= 34.9) {
            return 'Obesidade grau 1'
        } else if (imc <= 39.9) {
            return 'Obesidade grau 2'
        } else {
            return 'Obesidade grau 3'
        }
    }
    /* isNaN verifica se é um numero ou não e retorna valor boolean */
    if (isNaN(peso) || isNaN(altura)) {

        information1.innerHTML = `peso ${peso} e altura ${altura}.`
        window.alert("Verifique as informações digitadas e preencha todos os campos.")

    } else {

        information1.style.textAlign = 'center'
        information1.style.backgroundColor = 'rgb(17, 86, 102)'
        information1.style.padding = '10px'
        information1.style.color = 'white'
        information1.innerHTML = `O seu IMC é ${imc} (${classificacao()})`
    }

}



function theme() {

    let botao = document.getElementById('botao')
    let mudarTema = document.getElementById('imagem')
    let bcorpo = document.getElementById('corpo')
    let container1 = document.getElementById('container')

    let nuDeClicks = 0

    function incrementoDeClicks(n1=1) {
        return nuDeClicks++
    }

    nuDeClicks = nuDeClicks + 1

    window.alert(nuDeClicks)
    /* window.alert(incrementoDeClicks(1)) */
    botao.addEventListener('click', incrementoDeClicks)

    /* Estou utilizando os numeros impar e pares para fazer a mudança do tema  */

    if (nuDeClicks % 2 == 0) {
        /* Tema noite */
        /* window.alert('noite') */
        mudarTema.src = "../img/modo-noite.png"
        bcorpo.style.backgroundColor = "rgb(9, 48, 56)"
        container1.style.backgroundColor = "#ffffff2b"
        container1.style.color = 'white'

    } else {
        /* Tema dia */
        /* window.alert("dia") */
        mudarTema.src = "../img/modo-dia.png"
        bcorpo.style.backgroundColor = "rgb(17, 86, 102)"
        container1.style.backgroundColor = "white"
        container1.style.color = "black"

    }

}