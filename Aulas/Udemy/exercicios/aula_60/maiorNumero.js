


function maiorValor(nu1, nu2){
    if(nu1 > nu2){
        console.log(`O primeiro numero (${nu1}) é maior que o segundo numero (${nu2})`)

    }else if (nu1 < nu2){
        console.log(`O segundo numero (${nu2}) é maior que o primeiro numero (${nu1})`)
    }else{
        console.log("Numeros iguais")
    }
}


maiorValor(14, 7)

/*  Ou  */

let maiorValor2 = (x, y) => x > y ? x : y;
console.log(maiorValor2(14, 50))