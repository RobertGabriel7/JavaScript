console.log("-------------- Para não mostrar o erro para o usuario. --------------")
/* Esse bloco "try" serve justamente para tentar realizar ao que pode dar erro. Com esses blocos, o possivel erro que seria mostrado no terminal, é evitado pelo bloco "catch()" */
// Try = Tente
try{
    
    console.log(erro)

    // O bloco "catch" é executado quando o "try" deu erro. Dentro do catch () pode colocar o nome do erro.
} catch(err){

    console.log("Deu erro")
    // console.log(err) // Essa variavel "err" armazena o erro que seria mostrado no terminal.
}

console.log("-------------- Para capturar um erro --------------")

function soma(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        
        // Ou seja, caso ocorra alguma exceção no try, o throw vai enviar uma mensagem de erro para o catch informando que aconteceu algo e o catch vai tratar esse erro.
        // Mensagem de erro, ao inves do erro do js no terminal
        
        // throw("x e y precisam ser numeros.")

        // Para mostrar a mensagem e o erro igual do JS, com a linha e o endereço do arquivo que ocorreu o erro.
        
        // O objetivo principal do throw é permitir que você notifique o código que está lidando com a execução (geralmente no bloco catch) que algo inesperado aconteceu e requer atenção especial.

        // new Error é uma function construtora do JS
        // throw = lançar
        throw new Error ("x e y precisam ser numeros.")

    }
    return x + y
}

// Para tratar o erro
// try = tentar
try {

    console.log(soma("7", 7))

    // catch = pegar
}   catch (erro404){

    // Só mostre esse erro para o Backend, nunca para o Frontend
    //  console.log(erro404)
    console.log("Alguma coisa deu erro, não sei o que foi.")
}

/* ---------------------------------------------------------- */
console.log("Parte 2: Try, Catch e Finally")

try{
    // è executado quando não tem erros
    console.log("Sou chamado se não tiver erro") 
} catch(e){
    // É executado quando tem erros
    console.log("Sou chamado quando acontece algum erro")
} finally {
    // É sempre executado
    console.log("Sempre sou chamado")
}


// Para saber se é uma instancia de um objeto

function retornarHora(data){
    
    // se data não for uma instacia de Date
    if (! (data instanceof Date)){
        console.log("Não é uma estancia.")
    }
}

// Só uma estancia se for assim:
retornarHora( new Date())






