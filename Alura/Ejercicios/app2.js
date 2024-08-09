// Desafío 1

let diaDeLaSemana = prompt("¿Qué día de la semana es?");

console.log(diaDeLaSemana);

if(diaDeLaSemana === 'Domingo' || diaDeLaSemana === 'Sábado'){
    alert('¡Buen fin de semana!')
} else {
    alert('¡Buena semana!');
}

// Desafío 2

let numeroUsuario = prompt("Ingrese un número positivo o negativo:");

console.log(numeroUsuario);

if(numeroUsuario >= 0){
    alert(`El número ${numeroUsuario} es positivo`);
} else {
    alert(`El número ${numeroUsuario} es negativo`);
} 

// Desafío 3


let puntuacionJuego = prompt("Ingrese tu puntuación:");

console.log(puntuacionJuego);

if(puntuacionJuego >= 100){
    alert('¡Felicidades, has ganado');
} else {
    alert('Intentalo nuevamente para ganar');
}

// Desafío 4

let valorDelSaldo = 1000;

alert(`Su saldo actua es ${valorDelSaldo}`);


// Desafío 5

let nombreUsuario = prompt("Por favor, ingrese su nombre:");

alert(`¡Bienvenido ${nombreUsuario}!`);