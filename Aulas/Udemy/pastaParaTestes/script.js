function meuEscopo() {
    /*  onchange e oninput 
    
    O onchange serve para modificar algum elemento do html quando o usuario alterar algum valor desse elemento e clica FORA desse elemento 
    
    Porém,

    O oninput Este evento é acionado imediatamente após o valor de um elemento ser alterado. Isso significa que cada vez que o usuário digita ou apaga um caractere em um campo de entrada, por exemplo, o evento oninput é acionado.

    */
    


    function teste() {
        let spanRed = window.document.querySelector("#infored")
    let spanGreen = window.document.querySelector("#infogreen")
    let spanBlue = window.document.querySelector("#infoblue")
    let divCor = window.document.getElementById("diveCor")
        /*  */
        let red = parseInt(window.document.querySelector("#red").value)
        let green = parseInt(window.document.querySelector("#green").value)
        let blue = parseInt(window.document.querySelector("#blue").value)

        /* window.confirm("Deu certo") */
        console.log(`red: ${red}, green: ${green}, blue: ${blue}`)

        /* Para mostrar no hrml o valor do range */
        spanRed.innerHTML = red
        spanGreen.innerHTML = green
        spanBlue.innerHTML = blue
        divCor.style.background = `rgb(${red},${green}, ${blue})`
    }
    
    let rangeRed = window.document.querySelector("#red")
    rangeRed.addEventListener('input', teste)

    let rangeGreen = window.document.querySelector("#green")
    rangeGreen.addEventListener('input', teste)

    let rangeBlue = window.document.querySelector("#blue")
    rangeBlue.addEventListener('input', teste)

}
meuEscopo();