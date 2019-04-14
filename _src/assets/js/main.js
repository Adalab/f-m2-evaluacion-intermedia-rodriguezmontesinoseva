'use strict';

// el juego genera un numero al azar entre 1 y 100. el jugador tiene que adivinarlo
// pistas: num alto o bajo. Cuenta intentos. Hasta acierto

// Jugador introduce num y pulsa Prueba. acceder a contenido del input y mostrarlo en consola.

//comparar numUser con el aleatorio
// pistas en caja azul - al comparar pintar "demasiado alto", demasiado bajo" "has ganado campeona"
// intentos en rojo, esquina sup dcha
// Fin cuando acierta - actualizar contador de intentos cada vez que el usuario pruebe


const userNumberEl= document.querySelector('.userNumber');
const btnTryEl =document.querySelector('.btn-try');
const clueBoxEl = document.querySelector('.clue-box');
const aleatoryNumber =  getRandomNumber(100);
const counterEl = document.querySelector('.counter');

console.log (`El número aleatorio es ${aleatoryNumber}`);
let acc = 0;


function startGame(){

  const userNumberElInt= parseInt(userNumberEl.value);
  acc += 1;
  counterEl.innerHTML= `Intentos: ${acc}`;

  if (userNumberElInt > aleatoryNumber){
    clueBoxEl.innerHTML = 'demasiado alto';
  }else if(userNumberElInt < aleatoryNumber){
    clueBoxEl.innerHTML = 'demasiado bajo!';
  }else if(userNumberElInt === aleatoryNumber) {
    clueBoxEl.innerHTML ='¡HAS GANADO CAMPEONA!';
    acc=0;
  }
};

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

btnTryEl.addEventListener('click',startGame);

