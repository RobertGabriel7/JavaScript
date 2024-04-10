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
        
        window.alert(`incicio ${inicioo}, fim ${fimm} e passo ${passoo}`) 
        
        var sequencia = " " /* Variavel que vai armazenar a contagem */
        
        for (var comeco = inicioo; comeco <= fimm; comeco += passoo){

        informationn1.innerHTML = "Contando:"
        /* sequencia = sequencia + mensagem */
        sequencia += `&#128073; ${comeco} `
        
        }  
        /* Aqui a tag com esse id vai receber o valor da variavel sequencia */
         informationn2.innerHTML = sequencia
    }
}