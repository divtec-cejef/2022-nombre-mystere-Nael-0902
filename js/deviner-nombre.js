/**
* Jeu du nombre mystère
* @author  Nael Knani
* @version 0.1
* @since   2022-08-30 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    "use strict";

    const MIN = 1;
    const MAX = 100;

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let nbMystere = tireNombre(MIN, MAX);
    console.log(nbMystere);
    let nbCoups = 0;
    do {
        let lastResult = prompt('Entrez un nombre entre '+MIN+' et '+MAX);
        if (isNaN(lastResult) || lastResult < MIN || lastResult > MAX) {
            alert('Saisie invalide');
        }
        else {
            let message = lastResult < nbMystere ? 'C\'est plus' : 'C\'est moins';
            ++nbCoups;
            if (lastResult == nbMystere) {
                break;
            }
            alert(message);
        }
    } while (true);
    alert('Bravo, tu as réussi en '+nbCoups+ ' coups');
}()); // main IIFE
