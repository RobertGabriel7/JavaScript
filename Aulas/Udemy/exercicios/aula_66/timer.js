function contadorDeTempo(){
        // Seleciona o botão "Iniciar" no HTML
    let iniciar = document.querySelector(".btIniciar")

    // Seleciona o botão "Pausar" no HTML
    let pausar = document.querySelector(".btPausar")

    // Seleciona o botão "Zerar" no HTML
    let zerar = document.querySelector(".btZerar")

    // Seleciona o elemento que mostra a informação de tempo no HTML
    let information01 = document.querySelector(".information01")

    // Inicializa o contador de segundos
    let segun = 0

    // Variável para armazenar o intervalo do timer
    var timer1;

    // Função que converte segundos em um formato de tempo legível
    function segundos(segundo){
        // Cria uma nova data com os segundos fornecidos
        let data1 = new Date(segundo * 1000)
        
        // Retorna a hora formatada em pt-BR, sem usar o formato de 12 horas e com o fuso horário UTC
        return data1.toLocaleTimeString("pt-br", {
            hour12: false, // Usa o formato de 24 horas
            timeZone: "UTC" // Define o fuso horário como UTC
        })
    }
    
    // Função para iniciar a contagem
    function iniciarContagem(nu1){
        console.log("Contagem iniciada...")

        // Remove a classe "pausado" do elemento de informação
        information01.classList.remove("pausado")

        // Se o parâmetro nu1 for 1, inicia o timer
        if (nu1 === 1){
            // Define um intervalo que executa a função a cada 1 segundo
            timer1 = setInterval(function(){ 
                // Atualiza a variável segun
                segundos(segun); 
                segun++; 
                // Atualiza o conteúdo HTML com o tempo formatado
                information01.innerHTML = segundos(segun)
            }, 1000)
        } else if(nu1 === 2){
            // Se o parâmetro nu1 for 2, pausa o timer
            setTimeout(function(){ 
                clearInterval(timer1); 
                console.log("Pausou a contagem...") 
            }, 100)    
        }

        // Define o valor do botão "Iniciar"
        iniciar.value = "Iniciar"
    }

    // Adiciona um evento de clique ao botão "Iniciar" que limpa o intervalo atual e inicia a contagem
    iniciar.addEventListener("click", function (){ 
        clearInterval(timer1); 
        iniciarContagem(1) 
    })

    // Função para pausar a contagem
    function pausarContagem(){
        iniciarContagem(2)

        // Adiciona a classe "pausado" ao elemento de informação
        information01.classList.add("pausado")

        // Altera o valor do botão "Iniciar" para "Continuar"
        iniciar.value = "Continuar"
    }

    // Adiciona um evento de clique ao botão "Pausar" que pausa a contagem
    pausar.addEventListener("click", pausarContagem)

    // Função para zerar a contagem
    function zerarContagem(){
        // Reseta o contador de segundos
        segun = 0

        // Pausa a contagem
        pausarContagem()

        // Remove a classe "pausado" do elemento de informação
        information01.classList.remove("pausado")

        console.log("Contagem zerada...")

        // Atualiza o conteúdo HTML para "00:00:00"
        information01.innerHTML = "00:00:00"

        // Define o valor do botão "Iniciar"
        iniciar.value = "Iniciar"
    }

    // Adiciona um evento de clique ao botão "Zerar" que zera a contagem
    zerar.addEventListener("click", zerarContagem)

    // Código comentado para demonstrar uma alternativa de uso de apenas um addEventListener
    /* 
    document.addEventListener("click", function(e){ 
        let elemento = e.target
        if (elemento.classList.contains("btIniciar")) {
            // Código para iniciar a contagem aqui
        }
    })
    */  
}
// Para verificar se acontece algum erro.
try{
    contadorDeTempo();
}catch(erro){
    console.log("Rapaziada, aconteceu algum erro...")    
}
