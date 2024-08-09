// Desafío 1

function masaCorporal(peso, altura){
    let imc = peso / (altura * altura) ;
    console.log(imc);
    return;
}

masaCorporal(70, 1.65);

// Desafío 2

function calcularFactorial(numero) {
    if(numero === 0 || numero === 1){
        return 1;
    } else{
    
        return numero * calcularFactorial(numero - 1);
    }
    
}

console.log(calcularFactorial(4));
/*
// Desafío 3

function convertirDolares(valor) {
    let pesos = 3928 * valor;
    console.log(pesos);
    return;
}

convertirDolares(60);

// Desafío 4

function salaRectangular(altura, anchura){
    let perimetro = 2*(altura + anchura);
    let area = altura * anchura;
    alert(`el perimetro del rectangulo es ${perimetro}m y el area es ${area}m^2`);
    return;
}

salaRectangular( 4 , 5 );

// Desafío 5

function salaCircular(radio) {
    let perimetro = 2 * 3.14 * radio;
    let area = 3.14 * (radio * radio);
    alert(`el perimetro de la circunferencia es ${perimetro}m y el area es ${area}m^2`);
    return;
}

salaCircular(5);

// Desafío 6

function tablaMeMultiplicar(numero) {
        
}*/