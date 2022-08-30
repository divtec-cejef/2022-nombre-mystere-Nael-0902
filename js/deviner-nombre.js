/**
* Jeu du nombre mystère
* @author  Steve Fallet
* @version 0.1
* @since   2018-09-09 (date de création)
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

    let lastResult = null;
    let nbCoups = 0;
    do {
        lastResult = prompt('Entrez un nombre entre '+MIN+' et '+MAX);
        if (isNaN(lastResult) || lastResult < MIN || lastResult > MAX) {
            alert('Saisie invalide');
        }
        else {
            let message = lastResult < nbMystere ? 'C\'est plus' : 'C\'est moins';
            ++nbCoups;
            alert(message);
            if (lastResult == nbMystere) {
                break;
            }
        }
    } while (true);
    alert('Bravo, tu as réussi en '+nbCoups+ ' coups');
}()); // main IIFE
