'use strict';

const display = document.querySelector('#display')
const numero = document.querySelectorAll('[id*=tecla]')

const inserirNumero = (evento) => display.textContent = evento;

numeros.forEach (numero => 
    numero.addEventListenner('click', inserirNumero)
);