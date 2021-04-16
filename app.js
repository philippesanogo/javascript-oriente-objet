/**
 * Création d'instances de la class Titulaire
 * Pour utiliser la class Titutlaire, je lie le fichier Titulaire.js dans index.html, au-dessus de app.js.
 */

// instance de la class Titulaire
let titulaire1 = new Titulaire("Shade", "Tinem");
console.log(titulaire1);

let titulaire2 = new Titulaire("M.", "Philou");
console.log(titulaire2);

// utilise la methode créee dans le constructeur de la class Titulaire
titulaire1.afficheTitulaireInfos();
titulaire2.afficheTitulaireInfos();