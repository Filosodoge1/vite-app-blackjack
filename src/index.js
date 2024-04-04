import _ from 'underscore';
import { crearDeck } from "./blackjack/useCases/crearDeck.js";
import { pedirCarta } from "./blackjack/useCases/pedirCarta.js";
//import { valorCarta } from "./blackjack/useCases/valorCarta.js";
import { turnoComputador } from "./blackjack/useCases/turno-computadora.js";
import { cartaJugadores } from "./blackjack/useCases/cartaJugadores.js";
import { acumularPuntos } from "./blackjack/useCases/acumular-puntos.js";

const mimodulo = (() => {
  'use strict'

  let deck = [],
      tipos = ['C','D','H','S'],
      especiales = ['Q','J','K','A'],
      puntosJugadores = [],
      // puntosJugador = 0,
      // puntosComputadora = 0,
      smallsPuntos = document.querySelectorAll('small');

  //Referencia al boton pedir carta
  const btnpedir = document.querySelector('#btnPedir'),
  // //Referencia a las imagenes de las cartas
  //       divjugadorCartas = document.querySelector('#jugador-cartas'),
  // //Referencia a las iamgenes de la carta de la computadora
  //       divcomputadoraCartas = document.querySelector('#computadora-cartas'),
  // //Referencia al boton detener
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        btnDetener = document.querySelector('#btnDetener'),
  //Referencia al boton nuevo
        btnNuevo = document.querySelector('#btnNuevo');

  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
          console.log(puntosJugadores);
      }
      smallsPuntos[0].innerText = 0;
      smallsPuntos[1].innerText = 0;
      divCartasJugadores[0].innerHTML = '';
      divCartasJugadores[1].innerHTML = '';
      btnDetener.disabled = false;
      btnpedir.disabled = false;
  }

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
 
  });

  //Eventos
  btnpedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, smallsPuntos);
      // puntosJugador = puntosJugador + valorCarta(carta);
      // smallsPuntos[0].innerHTML = puntosJugador;
      // const imgCartas = document.createElement('img');
      // imgCartas.src = `./assets/cartas/${carta}.png`;
      // imgCartas.classList.add('carta');
      //divjugadorCartas.append(imgCartas);
      cartaJugadores(carta, 0, divCartasJugadores);
      console.log('pedir: ', puntosJugador)
      if (puntosJugador > 21) {   
          btnpedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputador(puntosJugador, deck, puntosJugadores, smallsPuntos, divCartasJugadores);
      } else if (puntosJugador === 21) {
          
          btnpedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputador(puntosJugador, deck, puntosJugadores, smallsPuntos, divCartasJugadores);
      } 
  });

  btnDetener.addEventListener('click', () => {
      btnpedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputador(puntosJugadores[0], deck, puntosJugadores, smallsPuntos, divCartasJugadores);
      // turnoComputador(puntosJugador);
  });

  return {
      nuevoJuego: inicializarJuego
  };

})();