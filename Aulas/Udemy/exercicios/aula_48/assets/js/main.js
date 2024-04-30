function diaDeHoje() {

    let information1 = window.document.querySelector("#information1")
    let data = new Date();
    let dia = data.getDay();
    let mes = data.getUTCMonth();
    let ano = data.getFullYear();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let nuDoDiaDaSemana = data.getDate();

    function diaDaSemana() {
        switch (dia) {
            case 0: return dia_da_semana = 'Domingo'
            case 1: return dia_da_semana = 'Segunda-Feira'
            case 2: return dia_da_semana = 'Terça-Feira';
            case 3: return dia_da_semana = 'Quarta-Feira';
            case 4: return dia_da_semana = 'Quinta-Feira';
            case 5: return dia_da_semana = 'Sexta-Feira'
            case 6: return dia_da_semana = 'Sábado'
            default: window.confirm('É isso ai.')
        }
    }

    function mesDoAno() {
        switch (mes) {
            case 0: return omes = 'Janeiro';
            case 1: return omes = 'Fevereiro';
            case 2: return omes = 'Março';
            case 3: return omes = 'Abril';
            case 4: return omes = 'Maio';
            case 5: return omes = 'Junho';
            case 6: return omes = 'Julho';
            case 7: return omes = 'Agosto';
            case 8: return omes = 'Setembro';
            case 9: return omes = 'Outubro';
            case 10: return omes = 'Novembro';
            case 11: return omes = 'Dezembro';
            default: omes = 'Mês inválido';
        }
    }
    information1.innerHTML = `${diaDaSemana()}, ${hora}:${minutos},  ${nuDoDiaDaSemana} de ${mesDoAno().toLocaleLowerCase()} de ${ano}.`

}
diaDeHoje();