/* Pedra, Papel e Tesoura */

function rps(p1, p2) {
    if (p1 === p2) {
        return `Empate entre ${p1} e ${p2}`;
    } else {
        if (p1 === 'scissors') {
            if (p2 === 'paper') {
                return `Player 1 won! escolheu: ${p1} contra ${p2}.`;
            } else if (p2 === 'rock') {
                return `Player 2 won! escolheu: ${p2} contra ${p1}.`;
            } else {
                return `Draw no scissors`;
            }
        } else if (p1 === 'paper') {
            if (p2 === 'rock') {
                return `Player 1 won! escolheu: ${p1} contra ${p2}.`;
            } else if (p2 === 'scissors') {
                return `Player 2 won! escolheu: ${p2} contra ${p1}.`;
            } else {
                return `Draw no paper`;
            }
        } else if (p1 === 'rock') {
            if (p2 === 'scissors') {
                return `Player 1 won! escolheu: ${p1} contra ${p2}.`;
            } else if (p2 === 'paper') {
                return `Player 2 won! escolheu: ${p2} contra ${p1}.`;
            } else {
                return `Draw no rock`;
            }
        } else {
            return "Opção inválida";
        }
    }
}

console.log(rps('rock', 'paper'));


/* 
scissores = Tesoura 
paper = Papel
rock = Pedra
won = venceu
draw = empate
*/