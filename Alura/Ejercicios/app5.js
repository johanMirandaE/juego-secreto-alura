// Desafío 1

function saludo() {
    console.log('¡Hola, mundo!');
    return;
}

saludo();

// Desafío 2

function saudoConNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}

saudoConNombre('Johan');

// Desafío 3

function dobleDelNumero(numero){
    
    return numero * 2;
}

let resultadoDoble = dobleDelNumero(10);
console.log(resultadoDoble);


// Desafío 4

function promedio(numeroUno, numeroDos, numeroTres){
    let resultado = (numeroUno + numeroDos + numeroTres)/3;
    console.log(`El promedio de ${numeroUno}, ${numeroDos}, ${numeroTres} es: ${resultado}`);
    return;
}

promedio(3,5,6);

// Desafío 5

function numeroMayor(numero1, numero2) {
    if(numero1>numero2){
        console.log(`${numero1} es mayor`);
    }else if(numero1<numero2){
        console.log(`${numero2} es mayor`);
    }else{
        console.log('Son iguales');
    }
    return;
}

numeroMayor(100,20);

// Desafío 6

function numeroMultiplicado(num) {
    resultado = num * 2;
    console.log(`El resultado de multplicar ${num} por si mismo es: ${resultado}`);
    return;
}

numeroMultiplicado(8);