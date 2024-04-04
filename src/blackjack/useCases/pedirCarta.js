/**
 * 
 * @param {Array<string>} deck 
 * @returns {string} 1 carta del deck
 */

export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();;
}
