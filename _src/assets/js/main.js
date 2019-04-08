'use strict';

// el juego genera un numero al azar entre 1 y 100. el jugador tiene que adivinarlo
// pistas: num alto o bajo. Cuenta intentos. Hasta acierto

// Jugador introduce num y pulsa Prueba. acceder a contenido del input y mostrarlo en consola. comparar numUser con el aleatorio
// pistas en caja azul - al comparar pintar "demasiado alto", demasiado bajo" "has ganado campeona"
// intentos en rojo, esquina sup dcha
// Fin cuando acierta - actualizar contador de intentos cada vez que el usuario pruebe

// me traigo objeto input, botón, caja pistas

const useNumberEl= document.querySelector('.useNumber');
console.dir(useNumberEl);
const btnTryEl =document.querySelector('.btn-try');
console.log(btnTryEl);
const clueBoxEl = document.querySelector('.clue-box');
let acc = 0;


function startGame(){
  const counterEl = document.querySelector('.counter');
  acc = acc +1;
  alert(acc);
  counterEl.innerHTML = acc;

  console.log("El número tecleado es " + useNumberEl.value);
  getRandomNumber(100);

  //comparo numero aleatorio con el introducido por el usuario
  if (parseInt(useNumberEl.value) > parseInt(getRandomNumber.value)){
    clueBoxEl.innerHTML = "demasiado alto"
  }else if(parseInt(useNumberEl.value) < parseInt(getRandomNumber.value)){
    clueBoxEl.innerHTML = "demasiado bajo!"
  }else {
    clueBoxEl.innerHTML =" HAS GANADO CAMPEONA!";
  }

};
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

console.log('> ' + getRandomNumber(100));
console.log(acc);

btnTryEl.addEventListener('click',startGame);

