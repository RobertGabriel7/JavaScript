/* Para criar um objeto no javaScript */

const obijetopai = {

    /* Atributos */
    nome: 'Robert ',
    sobrenome: 'Gabriel ',
    idade: '21 '

};
console.log(obijetopai)

/* É possivel criar um objeto dentro de uma function */
/* Essa function retorna objetos */
function criarPessoa(nome, sobrenome, idade ){ 
    /* Criando o objeto */
    return {
        /* nome (variavel do objeto) recebe: nome (variavel da function) */
        /* Mas se as variaveis têm o mesmo nome das variaveis da function, não precisa dizer que a variavel nome recebe a variavel nome, o javaScript já entende isso */
        nome, sobrenome, idade
    };
}

let novaPessoa = criarPessoa('Robert', 'Gabriel Fernandes Ferreira', 21)
console.log('teste...')
console.log(typeof novaPessoa)


/* Outro exemplo */


const pessoa1 = {
    
    /* Atributos */
    nome: 'Gabriel',
    sobrenome: 'Fernandes',
    idade: 21,

    /* Function, precisa necessariamente colocar: function nome_da_function, mas apenas o nome mesmo */
    fala(){
        /* Para acessar uma varivael que não está dentro da function, precisa utilizar: this.variavel */
        /* o this representa o objeto */
        console.log(`O meu nome é ${this.nome}, meu sobrenome é ${this.sobrenome} e tenho ${this.idade} anos de idade.`)
   
    }
};

pessoa1.fala()