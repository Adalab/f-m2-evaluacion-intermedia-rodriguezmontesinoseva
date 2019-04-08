'use strict';

//console.log('>> Ready :)');

// el juego genera un numero al azar entre 1 y 100. el jugador tiene que adivinarlo
// pistas: num alto o bajo. Cuenta intentos. Hasta acierto
// Jugador introduce num y pulsa Prueba. acceder a contenido del input y mostrarlo en consola. comparar numUser con el aleatorio
// pistas en caja azul - al comparar pintar "demasiado alto", demasiado bajo" "has ganado campeona"
// intentos en rojo, esquina sup dcha
// Fin cuando acierta - actualizar contador de intentos cada vez que el usuario pruebe

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
  // Anda, chacho, píntame en la consola un número random hasta 100;
  console.log('> ' + getRandomNumber(100));
