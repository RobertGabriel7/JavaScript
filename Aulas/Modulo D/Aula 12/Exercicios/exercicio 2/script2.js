function Verificando(){

    
    var data = new Date()
    var hoje = data.getFullYear()


    //Ano de nascimento da pessoa
    var texto = window.document.getElementById("textDoAno").value
    //Convertendo a variavel texto para o tipo Number
    var AnoDeNasc = Number(texto)

    var img1 = window.document.getElementById("imagem1")
    var bcorpoo = window.document.getElementById("bcorpo")
    var secao = window.document.getElementById("secao1")
    //Identificando os inputs radio
    var boyOuGirl = window.document.getElementsByName("sexo1")
    // paragrafo para informações
    var information = window.document.getElementById("p1")
    //Idade com base na data digitada
    var idade = hoje - AnoDeNasc
    var genero = "indefinido"

    if(texto == "" || AnoDeNasc > hoje){
        
        information.innerHTML = "Preencha o campo 'Ano de Nascimento' e verifique a data digitada."
     
    }else{

           // (boyOuGirl[0].checked verifica se a primeira caixa [0] foi marcada (checked)
           if (boyOuGirl[0].checked){
                   
                    var genero = "homem"
                    information.innerHTML = `Você tem ${idade} anos de idade e é um ${genero}.`
                    //Verificação da idade            
                    if(idade >= 0 && idade <= 12){
                        //Criança   
                        img1.src = "pexels-menino.png"
                    }else if(idade < 30){
                        //jovem
                        img1.src = "pexels-jovemMasculino.png"
                        bcorpoo.style.backgroundColor = "#B97753"
                    }else if(idade < 60){
                    //Homem{
                        img1.src = "pexels-homem.png"
                    }else{
                        //Idoso
                        img1.src = "pexels-idoso.png"
                    }

            }else{
                
                    var genero = "mulher"
                    information.innerHTML = `Você tem ${idade} anos de idade e é uma ${genero}.`
                    //Verificação da idade
                    if(idade > 0 && idade <= 12){
                        img1.src = "pexels-menina (2).png"
                    }else if(idade < 30){
                        img1.src = "pexels-jovemFeminina.png"
                        bcorpoo.style.backgroundColor = "#4B7889"
                    }else if(idade < 60){
                        img1.src = "pexels-mulher.png"
                    }else{
                        img1.src = "pexels-idosa.png"
                    }
            }
    }
}