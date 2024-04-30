function meuEscopo() {

    function diaDeHoje() {
        let information1 = window.document.querySelector("#information1")
        let data = new Date();
        let dia = data.getUTCDay();
        let mes = data.getUTCMonth();
        let ano = data.getFullYear();
        let hora = data.getHours();
        let minutos = data.getMinutes();
        let nuDoDiaDaSemana = data.getDate();
        let dia_da_semana;


        switch (dia) {
            case 1:
                dia_da_semana = 'Domingo'
                break;

            case 2:
                dia_da_semana = 'Segunda-Feira'
                break;

            case 3:
                dia_da_semana = 'Terça-Feira';
                break;

            case 4:
                dia_da_semana = 'Quarta-Feira';
                break;

            case 5:
                dia_da_semana = 'Quinta-Feira';
                break;

            case 6:
                dia_da_semana = 'Sexta-Feira'
                break;

            case 7:
                dia_da_semana = 'Sábado'
                break;

            default:
                window.confirm('É isso ai.')
        }

        switch (mes) {
            case 0:
                mes = 'Janeiro';
                break;
            case 1:
                mes = 'Fevereiro';
                break;
            case 2:
                mes = 'Março';
                break;
            case 3:
                mes = 'Abril';
                break;
            case 4:
                mes = 'Maio';
                break;
            case 5:
                mes = 'Junho';
                break;
            case 6:
                mes = 'Julho';
                break;
            case 7:
                mes = 'Agosto';
                break;
            case 8:
                mes = 'Setembro';
                break;
            case 9:
                mes = 'Outubro';
                break;
            case 10:
                mes = 'Novembro';
                break;
            case 11:
                mes = 'Dezembro';
                break;
            default:
                mes = 'Mês inválido';
        }

        information1.innerHTML = `${dia_da_semana}, ${hora}:${minutos},  ${nuDoDiaDaSemana} de ${mes} de ${ano}.`
    }

    diaDeHoje();

}
meuEscopo();