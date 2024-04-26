/* Existe um método no javascript que funciona como um espião para verificar os eventos que ocorrem na página */


let result = 0
function teste(n1 = 1){

    return n1++
    result = n1

}

teste(1)

console.log(result)