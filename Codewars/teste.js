function flickSwitch(arr) {
    let aurei = [];
    let switchMode = false; // Variável para controlar o modo de comutação

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            switchMode = !switchMode; // Alterna o modo de comutação
        }
        aurei.push(!switchMode); // Adiciona o valor invertido do switchMode ao array aurei
    }
    
    return aurei;
}

let teste3 = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick', 'opa', 'flick' ];
console.log(flickSwitch(teste3)); // Saída esperada: [true, true, false, false, true]
