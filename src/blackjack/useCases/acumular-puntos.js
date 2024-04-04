import { valorCarta } from "./valorCarta";

/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @param {Array<string>} puntosJugadores 
 * @param {HTMLElement} smallsPuntos 
 * @returns 
 */

export const acumularPuntos = (carta , turno, puntosJugadores, smallsPuntos) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    console.log(puntosJugadores[turno], 'turno: ', turno, carta, smallsPuntos);
    smallsPuntos[turno].innerText = puntosJugadores[turno];
    console.log('aquiiiii: ',puntosJugadores[turno]);
    return puntosJugadores[turno];
};