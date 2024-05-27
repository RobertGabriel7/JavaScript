function ListaDeTarefas() {
    // Seleciona o botão de adicionar tarefa no DOM
    let botaoAddTarefa = document.querySelector(".btAdicionarTarefa");

    // Seleciona o campo de input onde a tarefa será digitada
    let inputTarefa = document.querySelector(".adicionarTarefa");

    // Array para armazenar as tarefas
    let tarefas = [];

    // Função para limpar o campo de input e focar nele
    function limparInput() {
        inputTarefa.value = ""; // Limpa o campo de input
        inputTarefa.focus(); // Foca no campo de input
    }

    // Função para carregar tarefas salvas do localStorage quando a página é carregada
    function carregarTarefasSalvas() {
        // Obtém as tarefas salvas do localStorage
        const tarefasSalvas = localStorage.getItem('tarefas');

        // Se houver tarefas salvas, parseia o JSON para um array
        if (tarefasSalvas) {
            tarefas = JSON.parse(tarefasSalvas);

            // Para cada tarefa salva, adiciona ela à interface
            for (let tarefa of tarefas) {
                adicionarTarefaNaLista(tarefa);
            }
        }
    }

    // Função para adicionar uma tarefa à lista na interface
    function adicionarTarefaNaLista(tarefa) {
        // Seleciona o elemento da lista onde as tarefas serão adicionadas
        let lista = document.querySelector(".lista");
        
        // Cria um elemento <div>
        let div = document.createElement("div");
        
        // Cria um elemento <li>
        let li = document.createElement("li");
        
        // Cria um elemento <input> para o botão de remover
        let botao = document.createElement("input");

        // Configura o botão de remover
        botao.type = "button"; // Define o tipo do input como botão
        botao.value = "Remover"; // Define o texto do botão
        botao.className = "btRemover"; // Adiciona uma classe CSS ao botão

        // Configura a classe da div
        div.className = "div01";

        // Define o texto do <li> com a tarefa
        li.textContent = tarefa;

        // Adiciona a div como filho do elemento da lista
        lista.appendChild(div);

        // Adiciona o <li> como filho da div
        div.appendChild(li);

        // Adiciona o botão de remover como filho do <li>
        li.appendChild(botao);

        // Adiciona um evento para remover a tarefa
        botao.addEventListener("click", function () {
            div.remove(); // Remove a div da lista
            salvarAsTarefas(); // Atualiza o localStorage após remover a tarefa
        });
    }

    // Função para adicionar uma nova tarefa
    function addTarefa() {
        // Obtém o valor do campo de input
        let tarefa = inputTarefa.value;

        // Verifica se o input não está vazio
        if (tarefa !== "") {
            tarefas.push(tarefa); // Adiciona a tarefa ao array de tarefas
            adicionarTarefaNaLista(tarefa); // Adiciona a tarefa na interface
            limparInput(); // Limpa o campo de input
            salvarAsTarefas(); // Salva as tarefas no localStorage
        } else {
            alert("Insira informações."); // Alerta o usuário se o input estiver vazio
        }
    }

    // Função para salvar as tarefas no localStorage
    function salvarAsTarefas() {
        const tarefasJSON = JSON.stringify(tarefas); // Converte o array de tarefas para JSON
        localStorage.setItem("tarefas", tarefasJSON); // Salva o JSON no localStorage
    }

    // Adiciona evento de clique ao botão de adicionar tarefa
    botaoAddTarefa.addEventListener("click", function (e) {
        addTarefa(); // Chama a função de adicionar tarefa quando o botão é clicado
    });

    // Adiciona evento de tecla ao input para adicionar tarefa ao pressionar Enter
    inputTarefa.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTarefa(); // Chama a função de adicionar tarefa ao pressionar Enter
        }
    });

    // Carrega tarefas salvas quando a página for aberta
    carregarTarefasSalvas();
}

// Chama a função principal para iniciar a lista de tarefas
ListaDeTarefas();

