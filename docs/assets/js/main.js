"use strict";const useNumberEl=document.querySelector(".useNumber");console.dir(useNumberEl);const btnTryEl=document.querySelector(".btn-try");console.log(btnTryEl);const clueBoxEl=document.querySelector(".clue-box");let acc=0;function startGame(){const e=document.querySelector(".counter");acc+=1,alert(acc),e.innerHTML=acc,console.log("El número tecleado es "+useNumberEl.value),getRandomNumber(100),parseInt(useNumberEl.value)>parseInt(getRandomNumber.value)?clueBoxEl.innerHTML="demasiado alto":parseInt(useNumberEl.value)<parseInt(getRandomNumber.value)?clueBoxEl.innerHTML="demasiado bajo!":clueBoxEl.innerHTML=" HAS GANADO CAMPEONA!"}function getRandomNumber(e){return Math.ceil(Math.random()*e)}console.log("> "+getRandomNumber(100)),console.log(acc),btnTryEl.addEventListener("click",startGame);