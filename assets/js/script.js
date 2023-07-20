/* Configuraçãpdo relógio */

/* Criação das variáveis const a partir do id */
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

/* Criação da const relogio para a função setInterval para configurar o relógio de acordo com horário atual;
dentro da função criamos variáveis do tipo let, sendo a primeira para criação do objeto data */
const relogio = setInterval(function time() {
    let dateToday = new Date ();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    /* Criação de condição para acrescentar um 0 a esquerda do número caso seja <10 */
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    /* Aplicando a const ao let 
    - textContent: para alterar o texto */
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})