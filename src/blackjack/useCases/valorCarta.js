
/**
 * 
 * @param {string} carta 
 * @returns {int}
 */

//funcion del valor de la carta
export const valorCarta = (carta) => {
    let valor = carta.substring(0,carta.length-1);
    let puntos = (isNaN(valor)) ?  
                (valor === 'A') ? 11 : 10  
                : valor * 1;

    return puntos;
}