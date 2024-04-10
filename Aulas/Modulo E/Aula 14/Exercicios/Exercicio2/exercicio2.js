function tabuada(){
    
    /* parseInt converte uma string em numbe int (número inteiro) */
    var numero = parseInt(window.document.getElementById("numero").value)
    var information1 = window.document.getElementById("information1")
    var information2 = window.document.getElementById("information2")

    // isNaN (Not-a-Number) verifica se um numero é valido ou não. Se não for um numero valido retorna false por não ser valido.
    if(isNaN(numero)){
        window.alert("Preencha as informações corretamente!")
    }else{
        information1.innerHTML = `Tabuada do número ${numero}.`

        /* Criei essa variavel para receber a mensagem e salvar */
        var tabua = " "
        for (var num = 0; num <= 10; num ++){
            var resultado = num * numero
            /* Essa variavel tabua está recendo ela mesma mais esse string */
            tabua += `${numero} x ${num} = ${resultado} <br>`
        }
        /* Com essa tag, eu consigo mostrar as mensagens anteriores junto com as novas mensagens */
        information2.innerHTML = tabua
    }
}