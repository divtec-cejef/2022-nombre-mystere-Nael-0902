/**
* Jeu du nombre mystère
* @author  Steve Fallet
* @version 0.1
* @since   2018-09-09 (date de création)
*/

//Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';

    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let nbMystere = tireNombre(1, 100);
    console.log(nbMystere);
    let nbEssais = 0;
    let reponse = null;
    let message = 'Le nombre à deviner est compris entre 1 et 100.';

    // Tant que la réponse est différente du nombre mystère
    do {
        // Récupère la réponse et la converti en entier
        reponse = parseInt(prompt(message));

        // Comptabilise l'essai
        nbEssais += 1;

        // Définit le message à afficher au prochain tour
        if (reponse > nbMystere) {
            message = 'C\'est moins';
        } else {
            message = 'C\'est plus';
        }
    } while (reponse !== nbMystere);

    alert('Bravo, tu as gagné en ' + nbEssais + ' coups !');
}()); //main IIFE
