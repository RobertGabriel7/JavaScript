
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