// Declaração de functions hoisting
// Acontece que o motor do Javascript primeira delcara as functions e depois chama essas function. Por isso, é possivel chamar um function antes dela ser declarada, como é no caso abaixo:

falarOi();

function falarOi(){
    console.log("Oi");
}


//------------------------------------------------------------------------------------------------------------------------------------------------------
// As functions são First-class objects (objetos de primeira class), ou seja, uma function pode ser expressada/passada como um dado para uma variavel ou outra function.
// Por exemplo:
// Function expression
const souUmDado = function(){ // A variavel se torna uma function 
    console.log("Sou um dado.")
}

// Posso usar uma function dentro de outra function
function executarFuncao(funcao){
    funcao()
}
executarFuncao(souUmDado)


//------------------------------------------------------------------------------------------------------------------------------------------------------
// Arrow function = é um recuso mais do ECMAscript2015
const functionArrow = () => {
    console.log("Sou uma arrow function ")
}
functionArrow();

//------------------------------------------------------------------------------------------------------------------------------------------------------
// Function dentro de um objetos

const obj = {
    /* gol: function(){
        console.log("Foi GOOOOOOOOL")
    }
 */
    // Outra maneira de fazer uma function dentro de um object
    goL() {
        console.log("Foi Golaçoooooooooo")
    }
}

obj.goL();


// Essas foram algumas maneiras de declarar functions 