function ePaisagem(altura, largura){
    if (altura < largura){
        console.log("Imagem no modo paisagem.")
    }else{
        console.log("Imagem normal")
    }
}
ePaisagem(1080, 1920)

/* Arrow function */

let andPaisgem = (altura, largura) => altura < largura ? console.log("Foto paisagem") : console.log("Foto normal.");

andPaisgem(1080, 1920)