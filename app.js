
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);//objeto
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto)// === igual en tipo de dato y igual en valor
    {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');// con el id obtengo el obj y uso removeAttribute 
        // para sacar el valor 'disabled' de la etiqueta <button> en HTML 
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    // let cajaLimpia = document.querySelector('#valorUsuario');
    // cajaLimpia.value = '';//por que es un objecto uso value 

    //? manera simplificada
    document.querySelector('#valorUsuario').value = '';

}


function generarNumeroSecreto() {
    let numeroGenerador = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerador);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    } else {

        // SI el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerador))// caso cuando el numero existe
        {
            return generarNumeroSecreto();

        } else {
            //guardar el elemento al final
            listaNumerosSorteados.push(numeroGenerador);
            return numeroGenerador;
        }


    }






}

function condicionesInicial() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //* limpiar caja
    limpiarCaja();
    //* Indicar mensaje de intervalo de números
    //* Generar el número aleatorio
    //* Inicializar el número intentos
    condicionesInicial();
    //* Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesInicial();


