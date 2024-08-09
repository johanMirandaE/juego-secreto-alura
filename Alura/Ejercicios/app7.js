// Desafío 1

let listaGenerica = [];


// Desafío 2

let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];


// Desafío 3

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// Desafío 4

function listaDeLenguajes (){
    console.log(lenguagesDeProgramacion);
}

listaDeLenguajes();

// Desafío 5

function listaDeLenguajesInverso (){
    console.log(lenguagesDeProgramacion.reverse());
}

listaDeLenguajesInverso();

// Desafío 6

let listaPromedio = [1, 2, 3, 4, 5];

function calcularPromedio(){

    let numero = 0;
    
    for (var i = 0; i < listaPromedio.length; i++){
        numero = numero + listaPromedio[i];
         
    }
    
    let promedio = numero / listaPromedio.length;

    console.log(`El promedio es: ${promedio}`);
}

calcularPromedio();

// Desafío 7

let listaNumeros = [10, 50, 80, 25, 14, 20, 17];

function numeroMayorYMenor (){

    let numeroMenor = listaNumeros[0];
    let numeroMayor = listaNumeros[0];

    for (let i = 1; i < listaNumeros.length; i++){
        if (numeroMenor > listaNumeros[i]){
                numeroMenor = listaNumeros[i];
        }else if(numeroMayor < listaNumeros[i]){
            numeroMayor = listaNumeros[i];
        }
    }

    console.log(`El número más grande es ${numeroMayor}`);
    console.log(`El número más pequeño es ${numeroMenor}`);
}

numeroMayorYMenor();

// Desafío 8

let listaDeSuma = [1, 2, 3, 4, 50];

function calcularSuma(){

    let numero = 0;
    
    for (var i = 0; i < listaDeSuma.length; i++){
        numero = numero + listaDeSuma[i];
         
    }
    console.log(`La suma de la lista es: ${numero}`);
}
https://web.whatsapp.com/
calcularSuma();

/*// Desafío 9

let listaDeFrutas = ["Manzana", "Pera", "Uvas", "Melón", "Fresa"];

function frutas (){
    listaDeFrutas.indexOf()
}*/

// Desafío 10

let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];

