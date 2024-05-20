// Functions setinterval e settimeout servem para controlar times

function mostrarHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-br', {hour12: false})
}

console.log(mostrarHora())

function chamarFunction(){
    console.log(mostrarHora())
}

// Para mostrar a hora atual automaticamente

// setInterval serve para configurar que alguma function seja executada em algum tempo

// passa function da hora e passar de quando e quando tempo  

// Ao inves de criar um function para chamar outra function, é possível utilizar as functions anonimas
// Pode colocar o setinterval em uma variavel
let hora = setInterval(function () {console.log(mostrarHora())}, 1000)


// setTimeout serve para algo depois do seu tempo acabar, por exemplo:

setTimeout(function () {
    // clearInterval limpa o setinterval
    clearInterval(hora)}
    
    , 5000)

// setTimeout serve para executar algo apos um tempo, por exemplo:

setTimeout(function() { console.log("Fala pessoal, vcs sao incriveis.")}, 7000)