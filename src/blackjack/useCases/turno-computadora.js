import { pedirCarta } from "./pedirCarta";
import { cartaJugadores } from "./cartaJugadores";
import { acumularPuntos } from "./acumular-puntos";

/**
 * 
 * @param {number} puntosminimos 
 * @param {Array<string>} deck 
 * @param {Array<string>} puntosJugadores 
 */

/**
 * 
 * @param {number} puntosminimos 
 * @param {Array<string>} deck 
 * @param {Array<string>} puntosJugadores 
 * @param {HTMLElement} smallsPuntos 
 * @param {HTMLElement} divCartasJugadores 
 */

export const turnoComputador = (puntosminimos, deck, puntosJugadores, smallsPuntos, divCartasJugadores) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, smallsPuntos);
        console.log('compu', puntosComputadora);
        console.log('jugador',puntosminimos);
        cartaJugadores(carta, puntosJugadores.length-1, divCartasJugadores);
        console.log('puntos jugador ', puntosminimos, 'puntos computadora', puntosJugadores[1]);
        if (puntosminimos>21) {
            break;
        }
    } while ((puntosComputadora <= puntosminimos) && (puntosminimos<=21));
    
    setTimeout(() => {
        (puntosComputadora === puntosminimos) ? alert('nadie ganó')         : ((puntosminimos>21) 
                                            ? alert('Computadora gana')   : (puntosComputadora>21)
                                            ? alert('Jugador ganó')       : (puntosminimos>puntosComputadora)
                                            ? alert('Jugador gana')       : alert('Computadora gana'));    
    }, 100);

}
