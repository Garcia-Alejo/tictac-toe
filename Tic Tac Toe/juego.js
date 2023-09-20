let jugadorUno = true;
let celdas = document.getElementsByClassName("cell");
const botonReiniciar = document.querySelector('#reiniciarBnt');
botonReiniciar.addEventListener('click', reiniciar);


for (let index = 0; index < celdas.length; index++) {
   celdas[index].addEventListener("click", adentroCelda);
}

function reiniciar(){
   for (let i = 0; i < celdas.length; i++) {
      celdas[i].innerHTML = "";
   }
   showWinner("")
}

function adentroCelda(e) {
   let cellValue = e.target.innerHTML;/**se fija que hay en la celdad onde se toco si hay algo no hace nada y si no hay pone x / o */
   if (!cellValue.length) {
      e.target.innerHTML = jugadorUno ? "x" : "o";
      jugadorUno = !jugadorUno;

      ganar(0, 1, 2);
      ganar(3, 4, 5);
      ganar(6, 7, 8);
      ganar(0, 3, 6);
      ganar(1, 4, 7);
      ganar(2, 5, 8);
      ganar(0, 4, 8);
      ganar(6, 4, 2);
   }
}

function ganar(c1, c2, c3) {
   if (
      celdas[c1].innerHTML.length &&
      celdas[c1].innerHTML == celdas[c2].innerHTML &&
      celdas[c2].innerHTML == celdas[c3].innerHTML
   ) {
      showWinner(celdas[c1].innerHTML + " win");
   }
}

function showWinner(player) {
   document.querySelector("#resultado").innerHTML = player;
}

/** restar boton falta agregar */

/** el inner html es para obbtener cosas del html en esta caso la celda// el query selector es para seleccionar y devuelvo la primera cosa de un domento y mas el all devuelve todo */
/**addeventlisteners le dice al js que vas a clakear en este caso getelementsbyclassname guarda en la variable cell todas las celdas del html*/