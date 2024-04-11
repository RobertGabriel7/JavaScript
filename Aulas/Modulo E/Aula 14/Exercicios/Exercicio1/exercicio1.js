function contar(){

    var inicioo = parseInt(window.document.getElementById("inicio").value)
    var fimm = parseInt(window.document.getElementById("fim").value)
    var passoo = parseInt(window.document.getElementById("passo").value)
    var informationn1 = window.document.getElementById("information1")
    var informationn2 = window.document.getElementById("information2")

    // isNaN (Not-a-Number) verifica se um numero é valido ou não, se não for um numero valido retorna true por não ser valido 

    if( isNaN(inicioo) || isNaN(fimm) || isNaN(passoo) ){
        window.alert("Verifique se todos os campos foram preenchidos corretamente!")
    }else{

        
        informationn2.innerHTML = " " /* Assim que eu clicar novamente em contar o texto n vai ser acomulado por causa disso */
        window.alert(`incicio ${inicioo}, fim ${fimm} e passo ${passoo}`) 
        
        if(passoo <= 0){
            window.alert("Passo = 1")
            passoo = 1
        }
      
        if(inicioo < fimm){
            
            for (var comeco = inicioo; comeco <= fimm; comeco += passoo){
                // Contagem crescente
            informationn1.innerHTML = "Contando:"
            /* sequencia = sequencia + mensagem */
            informationn2.innerHTML += `&#128073; ${comeco} `
            
            }
        }else{

            for (var comeco = inicioo; comeco >= fimm; comeco -= passoo){
                // Contagem regressiva
                informationn1.innerHTML = "Contando:"
                /* sequencia = sequencia + mensagem */
                informationn2.innerHTML += `&#128073; ${comeco} `
            }  
         }
         informationn2.innerHTML += `\u{1F3C1}`
    }
}