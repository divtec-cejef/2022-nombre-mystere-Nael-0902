* Remplacer `@author` avec votre nom et prénom
* * Créer des constantes pour min et max
* Pour les chaines de caractères utiliser les ' à la place de "
* Utiliser les accents graves et `${variable}` pour les chaines avec variables.
* Utiliser une variable `message` pour les textes à afficher à l'utilisateur
* Déclarer les fonctions avant leur appel.
* Transformer les nombres directement à la récupération avec `Number()` ou `parseInt()` ou `parseFolat()` ou 
* * Nom des constantes de valeur en **majuscule**.
---
Ne pas retourner une alert !

Afficher `alert` et ensuite `return`.

```javascript
// PAS BIEN
return alert('Entrez un nombre !');

// BIEN
alert('Entrez un nombre !');
return;
```
---
Eviter si possible les `if...else`.

```javascript
// PAS BIEN
if (!hauteur) {
    alert('Entrez un nombre !'); 
} else if (hauteur < 0 || hauteur > 500 ) {
    alert('Entrez un entre 0 et 500 !');     
} else {
    alert('Bravo !')
}

// BIEN
if (!hauteur) {
    alert('Entrez un nombre !');
    return; // Sort de la fonction
}

if (hauteur < 0 || hauteur > 500 ) {
    alert('Entrez un nombre !');
    return; // Sort de la fonction    
}

alert('Bravo !');
```