/* No curso vai ser utilizado o let */
/* utilizado o camelCase */

// Let tem escopo de bloco { ...bloco }
// Var só tem escopo de function 

// Toda function tem o seu bloco especial, então se uma variavel for declarada como 'var' ou 'let' dentro dessa function, não será possivel chamar essas variaveis fora da function, mas se as variaveis forem declaradas fora da fucntion, a function pode acessa-las.

/* Const

    Const (Constante) é uma variavel que não pode ser mudada, o seu valor permanece. A constante precisa ser criada e inicializada ao mesmo tempo. Uma variavel declarada como 'const' é similar a variavel declarada com 'let' (escopo de bloco).  No entanto, é importante observar que, ao declarar um objeto ou array com const, você ainda pode modificar as propriedades ou elementos desse objeto ou array, apenas não pode reatribuir a variável a outro objeto ou array. 

*/

const nome = 'Gabriel'

console.log(nome)

/* Let 
    Let á maneira mais recente (introduzida em 2015 com ES6) para declarar uma variavel no js.
    
    Quando existe mais de uma variavel let com o mesmo nome, o js vai buscar o primero valor da variavel na onde ela foi chamada, caso não tenha nesse bloco, o js vai procurar em outro bloco e se não tiver tambem o js procura no escopo global. Então é primero nos blocos e por fim no escopo global. 
    
    As variaveis declaradas com let só pode ser acessiveis dentro do escopo na qual foi declarada (escopo de bloco), por exemplo "if", "for", "switch". Por exemplo, se eu criar um function e dentro dessa function colocar um if e declarar uma variavel com let, eu só vou conseguir acessar a variavel dentro do if. 

    Exemplo prático:

    function testandoLet(){
        if(true){
            let variavelLet1 = "let___"    
        }
        console.log(variavelLet1)
    }
    testandoLet();

*/


/* Var 

    Var é a maneira mais tradicional (ainda utilizada) para declarar variaveis no js. As variaveis declaradas com Var podem ser redeclaradas.

    Uma variavel declarada com 'var' é acessivel em todo escopo no qual ela está declarada. Por exemplo, eu posso criar um function teste(), declarar uma variavel com var chamada de 'var nome', criar outra function chamada de 'testando()' dentro da function teste() e acessar a variavel 'var nome' pelo function testando().

    Exemplo prático:
    
        function teste(){
        var nome;
            function testando(){
                console.log(nome)
            }
            testando();
        }
        teste();    

*/


var nome1 = 'Robert'

console.log(nome1)

console.log('--------------------------------------------------------------------------------')

/* Um exemplo claro da diferença between var, let e const */

function exemplo() {
    var variavelVar = "var";
    let variavelLet = "let";
    const variavelConst = "const";

    if (true) {
        var variavelVar = "var alterada";
        let variavelLet = "let alterada";
        const variavelConst = "const alterada"; // Isso resultaria em um erro
    }

    console.log(variavelVar); // Saída: "var alterada"
    console.log(variavelLet); // Saída: "let"
    console.log(variavelConst); // Saída: "const"
}

exemplo();

// Outro ponto importante 

/* Hoisting (elevação)

    "Hoisting" é um comportamento em JavaScript em que declarações de variáveis e funções são movidas para o topo do seu contexto de execução durante a fase de compilação, antes da execução real do código. Isso significa que, mesmo que você declare uma variável ou função em algum lugar após o ponto em que você a utiliza no código, o JavaScript irá automaticamente mover essa declaração para o topo do escopo onde ela foi definida.

    Var: Com isso, se eu chamo uma variavel antes de declarar e depois declaro, o js com o comportamento "Hoisting" declara a variavel antes de chama-lá, chama a variavel e retorna undefined.

    Let: Se eu fizer o exemplo prático com o "let", o js vai me retorna com erro.

    Exemplo prático:

    console.log(hoistingg)

    var hoistingg = "Utilizando o comportamento Hoisting"


*/

console.log(hoistingg)

var hoistingg = "Utilizando o comportamento Hoisting"