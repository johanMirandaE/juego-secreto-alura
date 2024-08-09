// Desafío 1
let contenido = document.querySelector('h1');
contenido.innerHTML = 'Hora del Desafío';

// Desafío 2
function mostrarMensajeEnLaconsola(){
    console.log('El botón fue clicado');
}

// Desafío 3
function ciudadDeBrasil(){
    let ciudad = prompt('Digite el nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

// Desafío 4
function mensaje(){
    alert("Yo amo JS");
}

// Desafío 5
function suma(){
    let primeroNumero = parseInt(prompt('Digite el primer número'));
    let segundoNumero = parseInt(prompt('Digite el segundo número'));

    let resultado = primeroNumero + segundoNumero;

    alert(`El resultado de la operación es: ${primeroNumero} + ${segundoNumero} = ${resultado}`);
}