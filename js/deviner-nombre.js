/**
 * Jeu du nombre mystère
 * @author  Steve Fallet
 * @version 1.0
 * @since   2022-08-30 (date de création)
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
    // Constantes d'application
    const NB_MIN = 1;
    const NB_MAX = 100;

    /**
     * Fonction qui retourne un nombre aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // Récupération des éléments HTML à manipuler
    const strongNbMax = document.getElementById('nbMax');
    const strongNbMin = document.getElementById('nbMin');
    const formulaire = document.querySelector('form');
    const txtNombre = document.getElementById('nombre');
    const ulHistorique = document.getElementById('historique');

    // Tire le nombre mystère
    let nbMystere = tireNombre(NB_MIN, NB_MAX);
    // Affiche le nombre dans la console pour faciliter la triche ;)
    console.log(nbMystere);
    // Initialise le nombre d'essais
    let nbEssais = 0;

    // Remplace nombre min et max dans le HTML
    strongNbMin.innerText = NB_MIN;
    strongNbMax.innerText = NB_MAX;

    // Ajoute une écoute sur l'envoi du formulaire (événement submit)
    formulaire.addEventListener('submit', function (event) {

        // Annule l'envoi du formulaire afin de rester sur la page
        event.preventDefault();

        // Récupère la réponse et la converti en entier
        const reponse = parseInt(txtNombre.value);

        // Si l'utilisateur n'a pas entré un nombre valide
        if (isNaN(reponse)) {
            alert('Entrez un nombre valide !');
            return; // On s'arrête ici
        }

        // Comptabilise l'essai
        nbEssais += 1;

        // Teste la réponse de l'utilisateur
        if (reponse > nbMystere) {
            ulHistorique.innerHTML += `<li>C'est moins que <strong>${reponse}</strong> !</li>`;
        } else if (reponse < nbMystere) {
            ulHistorique.innerHTML += `<li>C'est plus que <strong>${reponse}</strong> !</li>`;
        } else {
            ulHistorique.innerHTML +=
                `<li>
                    <div>C'est bien <strong>${reponse} !</strong></div>
                    <div>
                        Bravo, tu as gagné en 
                        <strong>${nbEssais}</strong> coups.
                    </div>
                </li>`;
        }

        // Vide le champ du formulaire
        txtNombre.value = '';
        // Donne le focus au champ du formulaire
        txtNombre.focus();
    });
}()); //main IIFE
