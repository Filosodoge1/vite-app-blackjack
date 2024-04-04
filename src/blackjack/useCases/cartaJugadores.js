
/**
 * 
 * @param {string} carta 
 * @param {number} turno 
 * @param {HTMLElement} divCartasJugadores 
 */

export const cartaJugadores = (carta, turno, divCartasJugadores) => {
    const imgCartas = document.createElement('img');
    imgCartas.src = `./assets/cartas/${carta}.png`;
    imgCartas.classList.add('carta');
    divCartasJugadores[turno].append(imgCartas);
    // divcomputadoraCartas.append(imgCartas);
};