/* Objeto Date() */
let agora = new Date();

let ano = agora.getFullYear(); // Retorna o ano
let mes = agora.getMonth(); // Retorna o mês (0-11, onde 0 é janeiro e 11 é dezembro)
let dia = agora.getDate(); // Retorna o dia do mês (1-31)
let hora = agora.getHours(); // Retorna a hora (0-23)
let minuto = agora.getMinutes(); // Retorna os minutos (0-59)
let segundo = agora.getSeconds(); // Retorna os segundos (0-59)
let milissegundo = agora.getMilliseconds(); // Retorna os milissegundos (0-999)

console.log(`${hora}:${minuto}:${segundo}`)

let teste = agora.getUTCDay()
console.log(teste)