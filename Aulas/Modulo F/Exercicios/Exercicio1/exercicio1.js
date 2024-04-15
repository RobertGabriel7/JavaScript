var information1 = window.document.getElementById("information1")
var information2 = window.document.getElementById("information2")
var information3 = window.document.getElementById("information3")

var numNoArray = []

function analisar(){
    var numero = parseInt(window.document.getElementById("numero").value)
 /*    window.alert(numero) */

    if (isNaN(numero) || numero < 0 || numero >100){
        window.alert("Verifique as informações preenchidas.")
    }else{
        
        if (numNoArray.indexOf(numero) ==  -1 ) {
      
            var indice = numNoArray.length
            /* information2.innerHTML = `O ${numero} foi adicionado ao array.` */
            /* information2.innerHTML = numNoArray.indexOf[1] */
            numNoArray[indice] = numero
            /* for (var m = 0; m < numNoArray.length; m++) { */
            information1.innerHTML = "Resultado..."
            information2.innerHTML += `Indice ${indice} e o valor: ${numNoArray[indice]} <br>`
            
        }else{
            window.alert(`O número ${numero} já está registrado no array. `)
        }
    }
}

/* function para finalizar */
function finalizar(){

    if (numNoArray.length == 0){
        window.alert("Verifique as informações preenchidas.")
    }else{
        /* Para colocar o array em ordem crescente (de forma numerica) */
        var ordem = numNoArray.sort(function(a, b) {
            return a - b;
        })

        /* Para somar os elementos */
        var resultados = 0
        for(var t = 0; t < numNoArray.length; t++ ){
            var soma = numNoArray[t]
            resultados = resultados + soma       
        }
        
        var media = resultados / numNoArray.length
        var valortot = numNoArray.length - 1

        information3.innerHTML = `Quantidade de números registrados no array: ${numNoArray.length} <br> O maior valor registrado: ${numNoArray[valortot]} <br> O menor valor registrado: ${numNoArray[0]} <br> A soma de todos os elementos registrados: ${resultados} <br> A média de todos os elementos registrados ${media}`
    }
}

/* GRAÇAS A DEUS, consegui fazer esse exercicio. */