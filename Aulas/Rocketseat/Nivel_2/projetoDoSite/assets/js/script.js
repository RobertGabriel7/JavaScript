function teste(){
    /* documentElement é o documento HTML e a tag html */
    var html = document.documentElement
    
    var img = document.querySelector("#profile img");

    /* alert("teste") */
    
    /* html.classList(é um objeto que tem functions).contains('atributo')( que é uma function de classList) */
    /* html. a lista de classe (classList). contem (contains) ('a classe no html') */
    if(html.classList.contains('light')){
        /* Nesse caso aqui, objeto classList tem a function de remover uma class existente no document html */
        html.classList.remove("light")
        html.style.transition = "all 2s";
        
        /* Para atribuir um atributo para uma img: setAttribute('dizer qual atribuito vou utilizar', 'o valor do atributo') */
        img.setAttribute('src', '../img/carinha_do_ti-noite.jpg');
    }else{
        html.classList.add("light");
        img.setAttribute('src', '../img/carinha_do_ti.jpg');
        img.setAttribute('alt', 'Foto pessoal para o tema claro do site')
    }
    
    /* 
    
    Com function toggle(), eu posso substituir código acima por esse código abaixo: 
    
    a function toggle() significa alterar, ela alterar um class se tiver ou não. Por exemplo, se existe a class "light", function toggle() remove a class, mas se não existir, a function toggle() cria a class com esse nome.
    
    html.classList.toggle("light")

    */
}

