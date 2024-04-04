import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposC Ejemplo:['C','D','H','S']
 * @param {Array<string>} especialesC Ejemplo: ['Q','J','K','A']
 * @returns {Array<string>} regresa un nuevo deck de cartas
 */

export const crearDeck = (tiposC, especialesC) => {

    if(!tiposC || tiposC.length === 0) throw new Error("Tipos de cartas es obligatorio")
    if(!especialesC || especialesC.length === 0) throw new Error("Tipos especiales de cartas es obligatorio")

    let deck = [];
    console.log('aqui', tiposC, especialesC);
    for (let i = 2; i <=10 ; i++) {
        for (let tipo of tiposC) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposC) {
        for (let esp of especialesC) {
            deck.push(esp + tipo);
        }        
    }

    return _.shuffle(deck);;
}