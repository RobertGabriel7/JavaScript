var idade = 66
if(idade >= 16 && idade <= 18 || idade > 65 ){
    console.log('Voto opcional')
}else{
    if(idade < 16 ){
        console.log("Não pode votar")
    }else{
        console.log("Voto obrigatorio")
    }
}